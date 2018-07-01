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
	selector: 'curriculum-page-score',
	template: `
		<curriculum-dashboard>
			<div class='center'>
				<mat-toolbar color='primary'>
					Keterangan Penugasan Guru
				</mat-toolbar>
				<mat-accordion [multi]='true'>
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
									Hari
								</td>
								<td class='mat-cell'>
									{{ teacherAssignmentV?.teacherAssignmentDay }}
								</td>
							</tr>
							<tr class='mat-row'>
								<td class='mat-cell'>
									Jumlah Jam
								</td>
								<td class='mat-cell'>
									{{ teacherAssignmentV?.teacherAssignmentDay }}
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
				</mat-accordion>
			</div>
			<score-table
				class='center'
				[showCreateMenu]='showCreateMenu'
				[showRowMenuTrigger]='showRowMenuTrigger'
				style='margin-top: 32px'>
			</score-table>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageScoreComponent implements AfterViewInit, OnInit {
	@ViewChild(ScoreTableComponent) scoreTableRef: ScoreTableComponent
	teacherAssignmentV: TeacherAssignmentV
	showCreateMenu: boolean = false
	showRowMenuTrigger: boolean = false
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		setTimeout(() => {
			this.scoreTableRef.shardTableRef.showCreateMenu = false
		}, 10)
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
									// class_id: teacherAssignmentV.class_id
								}).subscribe(r => console.log(r))
							}
						)
				}
			)
	}
	ngOnInit() {}
}
