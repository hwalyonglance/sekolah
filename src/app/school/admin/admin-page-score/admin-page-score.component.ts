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
	ShardEvent,
} from '../../../shard'
import {
	Class,
	ClassV,
	ClassWStudent,
	ClassWStudentV,
	Student,
	Teacher,
	TeacherAssignment,
	TeacherAssignmentV,
} from '../../school-shard'
import {
	ScoreTableComponent,
} from '../../score'

@Component({
	selector: 'admin-page-score',
	template: `
		<admin-dashboard>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Kelas
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='max-width: 33%;'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Kode
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.classCode }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.className }}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Jurusan
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='max-width: 33%;'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Kode
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.departmentCode }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.departmentName }}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Wali Kelas
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='max-width: 33%;'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							NIP
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.homeroomTeacherNIM }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.homeroomTeacherName }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							No. Telp.
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.homeroomTeacherTelp }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Alamat
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.homeroomTeacherAddress }}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Penugasan Guru
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='max-width: 33%;'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Status
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherAssignmentStatus }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Jumlah Jam
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherAssignmentHour }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Hari
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherAssignmentDay }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Periode
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherAssignmentPeriode }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Semester
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherAssignmentSemester }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							NIP
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherNIM }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherName }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							No. Telp
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherTelp }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Alamat
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.teacherAddress }}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Mata Pelajaran
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='max-width: 33%;'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Kode
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.subjectCode }}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{ teacherAssignmentV?.subjectName }}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<br />
			<score-table
				[createUrl]='createUrl'
				(editById)='onEditById($event)'>
			</score-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageScoreComponent implements AfterViewInit, OnInit {
	@ViewChild(ScoreTableComponent) scoreTableRef: ScoreTableComponent
	teacherAssignmentV: TeacherAssignmentV
	get createUrl() {
		let [
			slash,
			admin,
			kelas,
			class_id,
			penugasan,
			guru,
			teacherAssignment_id,
			nilai,
		] = this._router.url.split('/')
		slash = '/'
		const createUrl = [slash, admin, kelas, class_id, penugasan, guru, teacherAssignment_id, nilai, 'buat']
		// console.log(this._router.url.split('/'), createUrl)
		return createUrl
	}
	get editUrl() {
		let [
			slash,
			admin,
			kelas,
			class_id,
			penugasan,
			guru,
			teacherAssignment_id,
			nilai,
		] = this._router.url.split('/')
		slash = '/'
		const createUrl = [slash, admin, kelas, class_id, penugasan, guru, teacherAssignment_id, nilai, 'buat']
		// console.log(this._router.url.split('/'), createUrl)
		return createUrl
	}

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _router: Router,
	) { }
	ngAfterViewInit() {
		this._activatedRoute.params
			.subscribe(
				params => {
					const {
						class_id,
						teacherAssignment_id,
					} = params
					this._api.getBy('teacher_assignments_v', 'teacherAssignment_id', teacherAssignment_id)
						.subscribe(
							(teacherAssignmentV: TeacherAssignmentV) => {
								this.teacherAssignmentV
									= this.scoreTableRef.teacherAssignmentV
									= teacherAssignmentV
								// console.log(teacherAssignmentV)
								this.scoreTableRef.shardTableRef.setData({
									scoreTeacherAssignment_id: teacherAssignment_id,
								}).subscribe(r => console.log(r))
							}
						)
				}
			)
	}
	ngOnInit() { }
	onEditById(evt: ShardEvent) {
		let editUrl = this._router.url + '/' + evt._opts.score_id + '/ubah'
		// console.log('editById', evt, 'editUrl', editUrl)
		// console.log('evt', evt)
		this._router.navigateByUrl(editUrl)
	}
}
