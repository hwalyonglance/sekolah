import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	ActivatedRoute,
	Router,
} from '@angular/router'

import {
	ApiService,
	AuthService,
	ShardEvent,
} from '../../../shard'
import {
	Class,
	ClassV,
	ClassWStudent,
	ClassWStudentV,
	Student,
	scoreColumns,
	scoreWTeacherAssignmentColumns,
	Teacher,
	TeacherAssignment,
	TeacherAssignmentV,
} from '../../school-shard'
import {
	ScoreTableComponent,
} from '../../score'

@Component({
	selector: 'student-page-score',
	template: `
		<student-dashboard>
			<score-table
				class='center'
				[columns]='columns'
				[createUrl]='createUrl'
				(editById)='onEditById($event)'
				pdf='nilai'
				[showCreateMenu]='false'
				[showRowMenuTrigger]='false'
				>
			</score-table>
		</student-dashboard>
	`,
	styles: []
})
export class StudentPageScoreComponent implements AfterViewInit, OnInit {
	@ViewChild(ScoreTableComponent) scoreTableRef: ScoreTableComponent
	teacherAssignmentV: TeacherAssignmentV
	get createUrl() {
		let [
			slash,
			student,
			kelas,
			class_id,
			penugasan,
			guru,
			teacherAssignment_id,
			nilai,
		] = this._router.url.split('/')
		slash = '/'
		const createUrl = [slash, student, kelas, class_id, penugasan, guru, teacherAssignment_id, nilai, 'buat']
		// console.log(this._router.url.split('/'), createUrl)
		return createUrl
	}
	get editUrl() {
		let [
			slash,
			student,
			kelas,
			class_id,
			penugasan,
			guru,
			teacherAssignment_id,
			nilai,
		] = this._router.url.split('/')
		slash = '/'
		const createUrl = [slash, student, kelas, class_id, penugasan, guru, teacherAssignment_id, nilai, 'buat']
		// console.log(this._router.url.split('/'), createUrl)
		return createUrl
	}
	columns = scoreWTeacherAssignmentColumns
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _auth: AuthService,
		private _router: Router,
	) { }
	ngAfterViewInit() {
		this.setData()
		this.scoreTableRef.shardTableRef.refresh.subscribe(() => {
			this.setData()
		})
	}
	ngOnInit() { }
	onEditById(evt: ShardEvent) {
		let editUrl = this._router.url + '/' + evt._opts.score_id + '/ubah'
		// console.log('editById', evt, 'editUrl', editUrl)
		// console.log('evt', evt)
		this._router.navigateByUrl(editUrl)
	}
	setData() {
		const student_id = this._auth.role.student.getValue()._id
		// console.log('student_id', student_id)
		this.scoreTableRef.shardTableRef.where = {
			scoreStudent_id: student_id,
		}
		// this.scoreTableRef.shardTableRef.setData().subscribe(r => console.log(r))
	}
}
