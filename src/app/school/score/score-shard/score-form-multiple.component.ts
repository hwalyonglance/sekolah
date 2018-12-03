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
	FormArray,
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
} from '../../../shard'

import {
	Score,
	ScoreV,
	StudentInScoreV,
	StudentNotInScoreV,
	StudentInClassV,
	StudentInTeacherAssignmentV,
	TeacherAssignmentV,
} from '../../school-shard'

import { SCORE_FORM } from './score-form/score-form.form'

@Component({
	selector: 'score-form-multiple',
	templateUrl: './score-form-multiple.component.html',
	styles: []
})
export class ScoreFormMultipleComponent implements OnInit {
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
	get isModeEdit() { return this._data.mode === 'Edit' }
	get valid() { return this.form.valid }
	get value() {
		return this.form.value.map(s => {
			delete s.studentName
			return s
		})
	}
	get uniqueIsReadonly() {
		return this._data.mode === 'Edit'
	}

	form: FormArray
	constructor(
		private _api: ApiService,
		private _fb: FormBuilder,
		private _router: Router
	) { }
	ngOnInit() {
		this.sitaV()
	}
	sitaV() {
		const [slash, guru, assignment, teacherAssignment_id, nilai] = this._router.url.split('/')
		this._api.getByQuery('students_in_teachers_assignments_v', { teacherAssignment_id })
			.subscribe(
				(sitaVs: StudentInTeacherAssignmentV[]) => {
					// console.log('sitaVs', sitaVs)
					const scoreGroups: FormGroup[] = []
					sitaVs.forEach((sitaV: StudentInTeacherAssignmentV, i: number) => {
						const student_id = sitaV.student_id
						scoreGroups[i] = this._fb.group(SCORE_FORM.CONTROLS_CONFIG(this._api, this._data.mode))
						// console.log(`scoreGroups[${i}]`, scoreGroups[i])
						scoreGroups[i].get('scoreTeacherAssignment_id').setValue(teacherAssignment_id)
						scoreGroups[i].get('scoreStudent_id').setValue(student_id)
						scoreGroups[i].get('studentName').setValue(sitaV.studentName + ' - ' + sitaV.studentNIM)
						this._api.getByQuery('scores_v', { teacherAssignment_id, student_id })
							.subscribe((scoresVs: ScoreV[]) => {
								// console.log('scoresVs', scoresVs)
							}, console.log)
						merge(
							scoreGroups[i].get('scoreTask').valueChanges,
							scoreGroups[i].get('scoreUTS').valueChanges,
							scoreGroups[i].get('scoreUAS').valueChanges,
						).subscribe(() => {
							const task = Number(scoreGroups[i].get('scoreTask').value) * .50
							const uts = Number(scoreGroups[i].get('scoreUTS').value) * .20
							const uas = Number(scoreGroups[i].get('scoreUAS').value) * .30
							const final = task + uts + uas
							scoreGroups[i].get('scoreFinal').setValue(final)
						})
					})
					this.form = this._fb.array(scoreGroups)
					// console.log('valid', this.valid, 'value', this.value)
					this.onSubmit()
				}
			)
	}
	onSubmit(evt?: any) {
		console.log(evt)
		this.value.forEach((score: Score) => {
			this._api.upsert('scores', score, 'score_id')
				.subscribe(console.log)
		})
	}
}
