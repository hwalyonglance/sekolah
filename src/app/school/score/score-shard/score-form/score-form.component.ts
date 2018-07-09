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
	merge,
} from 'rxjs'
import {
	retry,
	take,
} from 'rxjs/operators'

import {
	ApiService,
	UtilService,
	validators,
	ShardEvent,
} from '../../../../shard'

import {
	Score,
	ScoreV,
	StudentInScoreV,
	StudentNotInScoreV,
	StudentInClassV,
	StudentInTeacherAssignmentV,
	TeacherAssignmentV,
} from '../../../school-shard'

import { SCORE_FORM } from './score-form.form'

@Component({
	selector: 'score-form',
	templateUrl: './score-form.component.html',
	styles: [],
	host: {
		class: 'score-form'
	},
})
export class ScoreFormComponent implements AfterViewInit, OnInit {
	private _data: any = {
		mode: 'Create'
	}

	@Input() submitUrl = ['/admin', 'class', 'hooorem']

	@Output() reset = new EventEmitter
	@Output() submit = new EventEmitter

	readonly RULES = SCORE_FORM.RULES
	readonly VALIDATION_MESSAGES = SCORE_FORM.VALIDATION_MESSAGES

	get controls() { return this.form.controls || {} }
	get errors() { return this.form.errors || {} }
	get mode() {
		const mode = this._data.mode
		return mode === 'Create' ? 'Buat' : 'Ubah'
	}
	get task() { return Number(this.form.get('scoreTask').value) }
	get uts() { return Number(this.form.get('scoreUTS').value) }
	get uas() { return Number(this.form.get('scoreUAS').value) }
	get isModeEdit() { return this._data.mode === 'Edit' }
	get valid() { return this.form.valid }
	get value() { return this.form.value }
	get uniqueIsReadonly() {
		return this._data.mode === 'Edit'
	}

	form: FormGroup
	options = {
		students: []
	}
	teacherAssignment_id = ''
	_teacherAssignmentV: TeacherAssignmentV = {}
	_studentsInTeacherAssignmentVs: StudentInClassV[] = []
	sisVs: StudentInScoreV[] = []
	snisVs: StudentNotInScoreV[] = []
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _fb: FormBuilder,
		private _router: Router,
		public util: UtilService
	) {
		_activatedRoute.data.subscribe((data) => {
			this._data = data
			this.buildForm()
		})
		_activatedRoute.params.subscribe((params) => {
			const {
				class_id,
				teacherAssignment_id,
				score_id = null,
			} = params
			// console.log('score_id', score_id)
			// console.log('teacherAssignment_id', teacherAssignment_id)
			setTimeout(() => {
				this.form.get('scoreTeacherAssignment_id').setValue(teacherAssignment_id)
			}, 2000)
			this.setTeacherAssignment(teacherAssignment_id, score_id)
			if (score_id) {
				this._api.getBy('scores_v', 'score_id', score_id)
					.pipe(
						retry(3),
					// take(3),
				)
					.subscribe(
						(r) => {
							console.log('rsssssss', r)
							this.setValue(r)
						},
						(r) => {
							// console.log(`getBy ${score_id} error`, r)
							// location.reload()
						},
						() => {
							// console.log(`getBy ${score_id} complete`)
						}
					)
			}
		})
	}
	ngAfterViewInit() { }
	ngOnInit() { }
	buildForm() {
		// const mode = this._router.url.endsWith('ubah') ? 'Edit' : 'Create'
		// console.log(this._router.url, mode)
		this.form = this._fb.group(SCORE_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
		merge(
			this.form.get('scoreTask').valueChanges,
			this.form.get('scoreUTS').valueChanges,
			this.form.get('scoreUAS').valueChanges,
		).subscribe(v => {
			const task = this.task * .5
			const uts = this.uts * .2
			const uas = this.uas * .30
			const final = task + uts + uas
			this.form.get('scoreFinal').setValue(final)

		})
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
			this.submit.next(new ShardEvent((opts) => {
				const {
					to = this.submitUrl,
				} = opts
				const score = this.value
				const key = 'score_id'
				const value = score.score_id
				if (this._data.mode === 'Create') {
					this._api
						.insert('scores', score)
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
						.updateBy('scores', key, value, score)
						.subscribe(
							(r: any) => {
								console.log('rrrrrrrrrrr', r)
								if (r.success) {
									// console.log(r)
									this._router.navigate(to)
								} else {
									alert('Gagal menyimpan perubahan.')
								}
							},
							(r) => {
								console.log('rrsssss', r)
								alert('Gagal menyimpan perubahan.')
							},
						// () => { console.log('complete') }
					)
				}
			}))
		}
	}
	getSelectData(table: 'teacher_assignments_v' | 'student_in_classes_v' | 'scores', where = {}) {
		this._api.getByQuery(table, where)
			.subscribe(
				(r: any) => {
					console.log(r)
					this.options[table] = r
				},
				(r) => {
					console.log(r)
				},
		)
	}
	setTeacherAssignment(teacherAssignment_id: string, score_id?: string) {
		this._api.getBy('teacher_assignments_v', 'teacherAssignment_id', teacherAssignment_id)
			.subscribe(
				(teacherAssignmentV: TeacherAssignmentV) => {
					this._teacherAssignmentV = teacherAssignmentV
					this.setStudentsNotInScore(teacherAssignment_id, score_id)
				}
			)
	}
	setStudentsInScore(teacherAssignment_id: string) {
		this._api.getByQuery('students_in_scores_v', { teacherAssignment_id })
			.subscribe(
				(sisVs: StudentInScoreV[]) => {
					this.sisVs = sisVs
					if (sisVs.length === 0) {
						this.setStudentnClassV()
					}
				}
			)
	}
	setStudentsNotInScore(teacherAssignment_id: string, score_id?: string) {
		this._api.getByQuery('students_not_in_scores_v', { teacherAssignment_id })
			.subscribe(
				(snisVs: StudentNotInScoreV[]) => {
					this.snisVs = snisVs
					// console.log('snisVs', snisVs)
					// console.log('score_id', score_id)
					if (score_id) {
						this.setStudetInScoreVByTeacherAssignment_id(score_id)
					} else {
						if (snisVs.length === 0) {
							this.setStudentsInScore(teacherAssignment_id)
						} else {
							this.options.students = snisVs
						}
					}
				}
			)
	}
	setStudetInScoreVByTeacherAssignment_id(score_id: string) {
		this._api.getBy('students_in_scores_v', 'score_id', score_id)
			.subscribe(
				(sisV: StudentInScoreV) => {
					// console.log('sisV', sisV)
					this.options.students = [sisV, ...this.snisVs]
				}
			)
	}
	setStudentnClassV() {
		this._api.getBy('students_in_classes_v', 'classWStudentClass_id', this._teacherAssignmentV.class_id)
			.subscribe((sicVs: StudentInClassV[]) => {
				this.options.students = sicVs
			})
	}
	setValue(score: Score) {
		for (let key in score) {
			// console.log(key)
			let value = score[key]
			const control = this.form.get(key)
			if (key === 'teacherAssignment_id') {
				continue
			}
			if (key.endsWith('Date')) {
				value = new Date(value)
			}
			if (control) {
				// control.patchValue(value)
				control.setValue(value || '')
			}
		}
	}
}
