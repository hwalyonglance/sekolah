import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	Router,
} from '@angular/router'

import {
	AuthService,
	Menu,
} from '../../../shard'

import {
	TeacherAssignmentV,
	teacherAssignmentColumns,
} from '../../school-shard'
import {
	TeacherAssignmentTableComponent,
} from '../teacher-shard'

@Component({
	selector: 'teacher-page-teacher-assignment',
	template: `
		<teacher-dashboard>
			<teacher-profile
				class='center mat-elevation-z2 w350px'>
			</teacher-profile>
			<table class='center mat-table mat-elevation-z2 p w350px' style='margin-bottom: 32px;'>
				<colgroup style='width: 40%;'></colgroup>
				<tr class='mat-row'>
					<td class='mat-cell'>Total Jam</td>
					<td class='mat-cell'>{{ totalJam }} Jam</td>
				</tr>
				<tr class='mat-row'>
					<td class='mat-cell'>Total Jam Aktif</td>
					<td class='mat-cell'>{{ totalJamAktif }} Jam</td>
				</tr>
			</table>
			<teacher-assignment-table
				class='center'
				[columns]='columns'
				[extraRowMenus]='extraRowMenus'
				pdf='penugasan_guru'
				[showCreateMenu]='false'
				[showDeleteMenu]='false'
				[showEditMenu]='false'>
			</teacher-assignment-table>
		</teacher-dashboard>
	`,
	styles: [`
		.w350px{
			width: 350px;
		}
	`]
})
export class TeacherPageTeacherAssignmentComponent implements AfterViewInit, OnInit {
	@ViewChild(TeacherAssignmentTableComponent) teacherAssignmentTableRef: TeacherAssignmentTableComponent

	@Input() extraRowMenus: Menu[] = [
		{ icon: 'edit', label: 'Kelola Nilai', onClick: (row: TeacherAssignmentV) => {
			// console.log('teacherAssignment row', row)
			const nilaiUrl = ['/guru', 'penugasan', row.teacherAssignment_id, 'nilai']
			this._router.navigate(nilaiUrl)
		} }
	]
	get totalJam() { return this.teacherAssignmentTableRef.totalJam }
	get totalJamAktif() { return this.teacherAssignmentTableRef.totalJamAktif }
	columns = teacherAssignmentColumns
	constructor(
		private _auth: AuthService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		this.setWhere()
		const teacher_id = this._auth.role.teacher.getValue()._id
		this.teacherAssignmentTableRef.shardTableRef.setData({
			teacherAssignmentTeacher_id: teacher_id
		})
	}
	ngOnInit() {}
	setWhere() {
		const teacher_id = this._auth.role.teacher.getValue()._id
		this.teacherAssignmentTableRef.shardTableRef.where = {
			teacherAssignmentTeacher_id: teacher_id
		}
	}
}
