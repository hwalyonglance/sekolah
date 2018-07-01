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
	Menu,
} from '../../../shard'
import {
	TeacherAssignmentV,
} from '../../school-shard'
import {
	TeacherAssignmentTableComponent,
} from '../../teacher'

@Component({
	selector: 'admin-page-teacher-assignment',
	template: `
		<admin-dashboard>
			<teacher-assignment-table
				[extraRowMenus]='extraRowMenus'
				[createUrl]="['/admin', 'penugasan', 'guru', 'buat']">
			</teacher-assignment-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageTeacherAssignmentComponent implements AfterViewInit, OnInit {
	@ViewChild(TeacherAssignmentTableComponent) teacherAssignmentTableRef: TeacherAssignmentTableComponent

	@Input() extraRowMenus: Menu[] = [
		{ icon: 'edit', label: 'Kelola Nilai', onClick: (row: TeacherAssignmentV) => {
			console.log('teacherAssignment row', row)
			const nilaiUrl = ['/admin', 'kelas', row.class_id, 'penugasan', 'guru', row.teacherAssignment_id, 'nilai']
			this._router.navigate(nilaiUrl)
		} }
	]

	constructor(
		private _router: Router,
	) {}
	ngAfterViewInit() {
		this.teacherAssignmentTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
