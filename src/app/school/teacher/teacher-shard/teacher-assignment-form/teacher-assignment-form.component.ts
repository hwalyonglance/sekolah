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
	DAY_NAMES,
	Password,
	UtilService,
	validators,
	ShardEvent,
} from '../../../../shard'

import { retry, take } from 'rxjs/operators'

import { TEACHER_ASSIGNMENT_FORM } from './teacher-assignment-form.form'

import { TeacherAssignment } from '../../../school-shard'

@Component({
	selector: 'teacher-assignment-form',
	templateUrl: './teacher-assignment-form.component.html',
	styles: [],
	host: {
		class: 'teacher-assignment-form'
	},
})
export class TeacherAssignmentFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Input() createUrl	= ['/admin', 'teacher', 'assignment', 'add']
	@Input() submitUrl	= ['/admin', 'teacher', 'assignment']

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	readonly RULES = TEACHER_ASSIGNMENT_FORM.RULES
	readonly VALIDATION_MESSAGES = TEACHER_ASSIGNMENT_FORM.VALIDATION_MESSAGES

	get controls() { return this.form.controls || {} }
	get errors() { return this.form.errors || {} }
	get mode() {
		const mode = this._data.mode
		return mode === 'Create' ? 'Tambah' : 'Ubah'
	}
	get isEditMode() { return this.mode === 'Ubah' }
	get valid() { return this.form.valid }
	get value() { return this.form.value }
	get uniqueIsReadonly() {
		return this._data.mode === 'Edit'
	}

	form: FormGroup
	select	= {
		classes		: [],
		dayNames	: DAY_NAMES	,
		subjects	: [],
		teachers	: [],
	}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _fb: FormBuilder,
		private _router: Router,
		public util: UtilService
	) {
		this.getSelectData('teachers')
		this.getSelectData('classes')
		this.getSelectData('subjects')
		_activatedRoute.data.subscribe((data: any) => {
			this._data = data
			this.buildForm()
			// console.log('data', data)
			// console.log('form', this.form)
		})
		_activatedRoute.params.subscribe((params) => {
			const { teacherAssignment_id } = params
			if ( teacherAssignment_id ) {
				console.log('teacherAssignment_id', teacherAssignment_id)
				this._api.getBy('teacher_assignments', 'teacherAssignment_id', teacherAssignment_id)
					.pipe(
						retry(3),
						// take(3)
					)
					.subscribe(
						(r) => {
							console.log('teacherAssignment', r)
							this.setValue(r)
						},
						(r) => {
							console.log(`getBy ${teacherAssignment_id} error`, r)
						},
						() => {
							// console.log(`getBy ${teacherAssignment_id} complete`)
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
		this.form = this._fb.group(TEACHER_ASSIGNMENT_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
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
			const teacherAssignment	= this.value
			const key				= 'teacherAssignment_id'
			const value				= teacherAssignment.teacherAssignment_id
			this.submit.next(new ShardEvent((opts) => {
				const {
					to	= this.submitUrl
				} = opts
				if ( this._data.mode === 'Create' ) {
					this._api
						.insert('teacher_assignments', teacherAssignment)
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
						.updateBy('teacher_assignments', key, value, teacherAssignment)
						.subscribe(
							(r: any) => {
								// console.log(r)
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
			}, {

			}))
		}
	}
	getSelectData(table: 'teachers' | 'classes' | 'subjects') {
		this._api.get(table)
			.subscribe(
				(r: any) => {
					console.log(r)
					this.select[table] = r
				},
				(r) => {
					console.log(r)
				},
			)
	}
	setValue(teacherAssignment: TeacherAssignment) {
		for (let key in teacherAssignment) {
			// console.log(key)
			let value = teacherAssignment[key]
			if (key.endsWith('Date')) {
				value = new Date(value)
			}
			const control = this.form.get(key)
			if (control) {
				// control.patchValue(value)
				control.setValue(value)
			}
		}
	}
}
