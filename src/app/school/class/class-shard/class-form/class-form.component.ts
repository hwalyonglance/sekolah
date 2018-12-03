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
} from '../../../../shard'

import { retry, take } from 'rxjs/operators'

import { CLASS_FORM } from './class-form.form'

import { Class } from '../../../school-shard'

@Component({
	selector: 'class-form',
	templateUrl: './class-form.component.html',
	styles: [],
	host: {
		class: 'class-form'
	},
})
export class ClassFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Input() submitUrl = ['/admin', 'class']

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	@ViewChild('datePickerRef_tglLahir') tglLahirRef: MatDatepicker<Date>

	readonly RULES = CLASS_FORM.RULES
	readonly VALIDATION_MESSAGES = CLASS_FORM.VALIDATION_MESSAGES

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
	select = {
		departments	: [],
		teachers	: [],
	}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _fb: FormBuilder,
		private _router: Router,
		public util: UtilService
	) {
		this.getSelectData('departments')
		this.getSelectData('teachers')
		_activatedRoute.data.subscribe((data: any) => {
			this._data = data
			this.buildForm()
		})
		_activatedRoute.params.subscribe((params) => {
			const { class_id } = params
			if ( class_id ) {
				this._api.getByQuery('classes', {class_id})
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
							console.log(`getBy ${class_id} error`, r)
							// location.reload()
						},
						() => {
							// console.log(`getBy ${class_id} complete`)
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
		this.form = this._fb.group(CLASS_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
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
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = this.submitUrl,
				} = opts
				const klass	= this.value
				const key	= 'class_id'
				const value	= klass[key]
				if ( this._data.mode === 'Create' ) {
					this._api
						.insert('classes', klass)
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
						.updateBy('classes', key, value, klass)
						.subscribe(
							(r: any) => {
								console.log('UPDATE SUCCESSS', r)
								if (r.success) {
									// console.log(r)
									this._router.navigate(to)
								} else {
									// /('Gagal menyimpan perubahan.')
								}
							},
							(r) => {
								console.log('GAGAL', r)
								// alert('Gagal menyimpan perubahan.')
							},
							() => {
								this._router.navigate(to)
								console.log('complete')
							}
						)
				}
			}))
		}
	}
	getSelectData(table: 'departments' | 'teachers') {
		this._api.get(table)
			.subscribe(
				(r: any) => {
					// console.log(r)
					this.select[table] = r
				},
				(r: any) => {
					// console.log(r)
				},
			)
	}
	setValue(klass: Class) {
		for (let key in klass) {
			// console.log(key)
			let value = klass[key]
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
