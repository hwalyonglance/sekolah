import {
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild
} from '@angular/core'
import {
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms'
import {
	MatDatepicker,
	MatTextareaAutosize,
} from '@angular/material'
import {
	ActivatedRoute,
	Router,
} from '@angular/router'

import {
	ApiService,
	Password,
	UtilService,
	validators,
	ShardEvent,
	aliasToMember,
} from '../../../../shard'

import { retry, take } from 'rxjs/operators'

import { STUDENT_FORM } from './student-form.form'

import { Student } from '../../../school-shard'

@Component({
	selector: 'student-form',
	templateUrl: './student-form.component.html',
	styles: [``],
	host: {
		class: 'student-form'
	},
})
export class StudentFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Input() submitUrl = ['/murid', 'join']

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	@ViewChild('datePickerRef_tglLahir') tglLahirRef: MatDatepicker<Date>
	@ViewChild(MatTextareaAutosize) alamatRef: MatTextareaAutosize

	readonly RULES = STUDENT_FORM.RULES
	readonly VALIDATION_MESSAGES = STUDENT_FORM.VALIDATION_MESSAGES

	readonly password = new Password()
	readonly password1 = new Password()
	get controls() { return this.form.controls || {} }
	get errors() { return this.form.errors || {} }
	get mode() {
		const mode = this._data.mode
		return mode === 'Create' ? 'Buat' : 'Ubah'
	}
	get passwordFieldIsHidden() {
		return this._data.mode === 'Edit'
	}
	get valid() { return this.form.valid }
	get value() { return this.form.value }
	get uniqueIsReadonly() {
		return this._data.mode === 'Edit'
	}

	form: FormGroup
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _fb: FormBuilder,
		private _router: Router,
		public util: UtilService
	) {
		_activatedRoute.data.subscribe((data: any) => {
			this._data = data
			this.buildForm()
		})
		_activatedRoute.params.subscribe((params) => {
			const { student_id } = params
			if ( student_id ) {
				this._api.getByQuery('students', {student_id})
					.pipe(
						retry(3),
						// take(3),
					)
					.subscribe(
						(r) => {
							console.log(r[0])
							this.setValue(r[0])
						},
						(r) => {
							console.log(`getBy ${student_id} error`, r)
							// location.reload()
						},
						() => {
							// console.log(`getBy ${student_id} complete`)
						}
					)
			}
		})
	}
	ngAfterViewInit() {
		// console.log(this.alamatRef)
		// console.log(this.tglLahirRef)
	}
	ngOnInit() {
	}
	buildForm() {
		this.form = this._fb.group(STUDENT_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
		// this.form.get('nim').valueChanges
		// 	.subscribe(
		// 		(v) => {
		// 			this._api.check('members', 'nim', v)
		// 				.subscribe(r=>console.log('r ', r))
		// 		},
		// 	)
	}
	getHintLength(controlName: string) {
		return `${this.value[controlName].length}`
				+ `/ ${this.RULES[controlName].maxLength}`
	}
	onReset(value = this.value) {
		this.reset.emit(value)
	}
	onSubmit(evt: Event) {
		evt.preventDefault()
		const student	= this.value
		const key		= '_id'
		const value		= student._id
		student.role	= 'student'
		if (confirm('Yakin dengan data yang anda isi?')) {
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = this.submitUrl
				} = opts
				if ( this.passwordFieldIsHidden ) {
					delete student.password
				}
				if ( this._data.mode === 'Create' ) {
					this._api
						.insert('members', student)
						.subscribe(
							(r) => {
								console.log(r)
								this._router.navigate(to)
							},
							(r) => {
								console.log(r)
							},
							// () => { console.log('complete') }
						)
				} else {
					this._api
						.updateBy('members', key, value, student)
						.subscribe(
							(r: any) => {
								console.log(r)
								if (r.success) {
									console.log(r)
									this._router.navigate(to)
								} else {
									alert('Gagal menyimpan perubahan.')
								}
							},
							(r) => {
								console.log(r)
								alert('Gagal menyimpan perubahan.')
							},
							// () => { console.log('complete') }
						)
				}
			}, {
				student
			}))
		}
	}
	setValue(student: Student) {
		console.log('setValue', student)
		student = aliasToMember('student', student)
		console.log('setValue', student)
		for (const key in student) {
			// console.log(key)
			let value = student[key]
			if (key.endsWith('Date')) {
				value = new Date(value)
			}
			const control = this.form.get(key)
			if (control) {
				// control.patchValue(value)
				control.setValue(value)
			}
		}
		this.alamatRef.resizeToFitContent(false)
	}
}
