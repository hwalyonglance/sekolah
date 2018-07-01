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
	aliasToMember,
} from '../../../../shard'

import { CURRICULUM_FORM } from './curriculum-form.form'

import { Curriculum } from '../../../school-shard'

@Component({
	selector: 'curriculum-form',
	templateUrl: './curriculum-form.component.html',
	styles: [],
	host: {
		class: 'curriculum-form'
	},
})
export class CurriculumFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Input() submitUrl = ['/admin', 'curriculum']

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	@ViewChild('datePickerRef_tglLahir') tglLahirRef: MatDatepicker<Date>
	@ViewChild(MatTextareaAutosize) alamatRef: MatTextareaAutosize

	readonly RULES = CURRICULUM_FORM.RULES
	readonly VALIDATION_MESSAGES = CURRICULUM_FORM.VALIDATION_MESSAGES

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
			const { curriculum_id } = params
			if ( curriculum_id ) {
				this._api.getByQuery('curriculums', {curriculum_id})
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
							console.log(`getBy ${curriculum_id} error`, r)
							// location.reload()
						},
						() => {
							// console.log(`getBy ${curriculum_id} complete`)
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
		this.form = this._fb.group(CURRICULUM_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
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
			const curriculum	= this.value
			const key			= '_id'
			const value			= curriculum._id
			curriculum.role	= 'curriculum'
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = this.submitUrl,
				} = opts
				if ( this.passwordFieldIsHidden ) {
					delete curriculum.password
				}
				if ( this._data.mode === 'Create' ) {
					this._api
						.insert('members', curriculum)
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
						.updateBy('members', key, value, curriculum)
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
	setValue(curriculum: Curriculum) {
		curriculum = aliasToMember('curriculum', curriculum)
		for (let key in curriculum) {
			// console.log(key)
			let value = curriculum[key]
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
