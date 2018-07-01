import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'

import {
	TeacherTableComponent,
} from '../../teacher'

@Component({
	selector: 'admin-page-teacher',
	template: `
		<admin-dashboard>
			<teacher-table
				class='center'
				[createUrl]="['/admin', 'guru', 'buat']">
			</teacher-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageTeacherComponent implements AfterViewInit, OnInit {
	@ViewChild(TeacherTableComponent) teacherTableRef: TeacherTableComponent
	constructor() {}
	ngAfterViewInit() {
		this.teacherTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
