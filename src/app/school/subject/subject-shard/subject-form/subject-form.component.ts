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
	aliasToMisc,
} from '../../../../shard'

import { retry, take } from 'rxjs/operators'

import { SUBJECT_FORM } from './subject-form.form'

import { Subject } from '../../../school-shard'

@Component({
	selector: 'subject-form',
	templateUrl: './subject-form.component.html',
	styles: [],
	host: {
		subject: 'subject-form'
	},
})
export class SubjectFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	readonly RULES = SUBJECT_FORM.RULES
	readonly VALIDATION_MESSAGES = SUBJECT_FORM.VALIDATION_MESSAGES

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
			console.log('ubah', params)
			const { subject_id } = params
			if ( subject_id ) {
				this._api.getByQuery('subjects', {subject_id})
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
							// console.log(`getBy ${subject_id} error`, r)
							// location.reload()
						},
						() => {
							// console.log(`getBy ${subject_id} complete`)
						}
					)
			}
		})
	}
	ngAfterViewInit() {}
	ngOnInit() {}
	buildForm() {
		this.form = this._fb.group(SUBJECT_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
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
			const subject	= this.value
			const key		= '_id'
			const value		= subject._id
			subject.u		= 'subject'
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = ['/admin', 'mapel']
				} = opts
				if ( this._data.mode === 'Create' ) {
					this._api
						.insert('misc', subject)
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
						.updateBy('misc', key, value, subject)
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
				subject
			}))
		}
	}
	setValue(subject: Subject) {
		subject = aliasToMisc('subject', subject)
		console.log(subject)
		for (let key in subject) {
			// console.log(key)
			let value = subject[key]
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
