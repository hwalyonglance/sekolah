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

import { TEACHER_FORM } from './teacher-form.form'

import {
	Teacher,
} from '../../../school-shard'

@Component({
	selector: 'teacher-form',
	templateUrl: './teacher-form.component.html',
	styles: [],
	host: {
		class: 'teacher-form'
	},
})
export class TeacherFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Input() submitUrl = ['/admin', 'teacher']

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	@ViewChild('datePickerRef_tglLahir') tglLahirRef: MatDatepicker<Date>
	@ViewChild(MatTextareaAutosize) alamatRef: MatTextareaAutosize

	readonly RULES = TEACHER_FORM.RULES
	readonly VALIDATION_MESSAGES = TEACHER_FORM.VALIDATION_MESSAGES

	readonly password = new Password()
	readonly password1 = new Password()
	get controls() { return this.form.controls || {} }
	get errors() { return this.form.errors || {} }
	get mode() {
		const mode = this._data.mode
		return mode === 'Create' ? 'Buat' : 'Ubah'
	}
	get passwordFieldIsHidden(){
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
			const { teacher_id } = params
			if ( teacher_id ) {
				this._api.getByQuery('teachers', {teacher_id})
					.pipe(
						retry(3),
						// take(3)
					)
					.subscribe(
						(r) => {
							console.log(r[0])
							this.setValue(r[0])
						},
						(r) => {
							console.log(`getBy ${teacher_id} error`, r)
							// location.reload()
						},
						() => {
							// console.log(`getBy ${teacher_id} complete`)
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
		this.form = this._fb.group(TEACHER_FORM.CONTROLS_CONFIG(this._api, this._data.mode), validators.passwordMatchValidator)
	}
	getHintLength(controlName: string) {
		return `${this.value[controlName].length}`
				+`/ ${this.RULES[controlName].maxLength}`
	}
	onReset(value = this.value) {
		this.reset.emit(value)
	}
	onSubmit(evt: Event) {
		evt.preventDefault()
		if(confirm('Yakin dengan data yang anda isi?')) {
			const teacher	= this.value
			const key		= '_id'
			const value		= teacher._id
			teacher.role	= 'teacher'
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = this.submitUrl,
				} = opts
				if ( this.passwordFieldIsHidden ) {
					delete teacher.password
				}
				if ( this._data.mode === 'Create' ) {
					this._api
						.insert('members', teacher)
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
						.updateBy('members', key, value, teacher)
						.subscribe(
							(r: any) => {
								console.log(r)
								if (r.success) {
									this._router.navigate(to)
								} else {
									alert('Gagal menyimpan perubahan.')
								}
							},
							(r) => {
								// console.log(r)
								alert('Gagal menyimpan perubahan.')
							},
							// () => { console.log('complete') }
						)
				}
			}))
		}
	}
	setValue(teacher: Teacher) {
		teacher = aliasToMember('teacher', teacher)
		for (let key in teacher) {
			// console.log(key)
			let value = teacher[key]
			if (key.endsWith('Date')) {
				value = new Date(value)
			}
			const control = this.form.get(key)
			if (control) {
				// control.patchValue(value)
				control.setValue(value)
			}
		}
		this.alamatRef.resizeToFitContent(true)
	}
}
