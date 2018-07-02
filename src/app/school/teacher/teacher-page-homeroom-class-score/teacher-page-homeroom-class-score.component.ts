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
	selector: 'teacher-page-homeroom-class-score',
	template: `
		<teacher-dashboard>
			<div class='center'>
				<mat-toolbar color='primary'>
					Keterangan Penugasan Guru
				</mat-toolbar>
				<mat-accordion [multi]=true>
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
				</mat-accordion>
			</div>
			<score-table
				class='center'
				[showCreateMenu]='false'
				[showRowMenuTrigger]='false'
				style='margin-top: 32px'>
			</score-table>
		</teacher-dashboard>
	`,
	styles: []
})
export class TeacherPageHomeroomClassScoreComponent implements AfterViewInit, OnInit {
	@ViewChild(ScoreTableComponent) scoreTableRef: ScoreTableComponent
	teacherAssignmentV: TeacherAssignmentV = {}

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		this._activatedRoute.params
			.subscribe(
				params => {
					const {
						class_id,
					} = params
					this._api.getBy('teacher_assignments_v', 'class_id', class_id)
						.subscribe(
							(teacherAssignmentV: TeacherAssignmentV) => {
								this.teacherAssignmentV
									= this.scoreTableRef.teacherAssignmentV
									= teacherAssignmentV
								// console.log(teacherAssignmentV)
								this.scoreTableRef.shardTableRef.where = {
									class_id,
								}
							}
						)
				}
			)
	}
	ngOnInit() {}
	// onEditById(evt: ShardEvent) {
	// 	let editUrl = this._router.url+'/'+evt._opts.score_id+'/ubah'
	// 	// console.log('editById', evt, 'editUrl', editUrl)
	// 	console.log('evt', evt)
	// 	this._router.navigateByUrl(editUrl)
	// }
}
