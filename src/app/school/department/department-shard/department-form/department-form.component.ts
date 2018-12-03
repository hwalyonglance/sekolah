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

import { retry, take } from 'rxjs/operators'

import {
	ApiService,
	Password,
	UtilService,
	validators,
	ShardEvent,
	aliasToMisc,
} from '../../../../shard'
import { Department } from '../../../school-shard'

import { DEPARTMENT_FORM } from './department-form.form'

@Component({
	selector: 'department-form',
	templateUrl: './department-form.component.html',
	styles: [],
	host: {
		class: 'department-form'
	},
})
export class DepartmentFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	readonly RULES = DEPARTMENT_FORM.RULES
	readonly VALIDATION_MESSAGES = DEPARTMENT_FORM.VALIDATION_MESSAGES

	get controls() { return this.form.controls || {} }
	get errors() { return this.form.errors || {} }
	get mode() {
		const mode = this._data.mode
		return mode === 'Create' ? 'Buat' : 'Ubah'
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
			// console.log(params)
			const { department_id } = params
			if (department_id) {
				this._api.getByQuery('departments', { department_id })
					.pipe(
						retry(3),
					// take(3),
				)
					.subscribe(
						(r) => {
							// console.log(r[0])
							this.setValue(r[0])
						},
						(r) => {
							// console.log(`getBy ${department_id} error`, r)
							// location.reload()
						},
						() => {
							// console.log(`getBy ${department_id} complete`)
						}
					)
			}
		})
	}
	ngAfterViewInit() { }
	ngOnInit() { }
	buildForm() {
		this.form = this._fb.group(DEPARTMENT_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
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
		if (confirm('Yakin dengan data yang anda isi?')) {
			const department = this.value
			department.u = 'department'
			const key = '_id'
			const value = department._id
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = ['/admin', 'jurusan']
				} = opts
				if (this._data.mode === 'Create') {
					this._api
						.insert('misc', department)
						.subscribe(
							(r) => {
								// console.log(r)
								this._router.navigate(to)
							},
							(r) => {
								// console.log(r)
							},
						// () => { console.log('complete') }
					)
				} else {
					this._api
						.updateBy('misc', key, value, department)
						.subscribe(
							(r: any) => {
								// console.log(r)
								if (r.success) {
									// console.log(r)
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
					department
				}))
		}
	}
	setValue(department: Department) {
		department = aliasToMisc('department', department)
		console.log(department)
		for (let key in department) {
			// console.log(key)
			let value = department[key]
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
