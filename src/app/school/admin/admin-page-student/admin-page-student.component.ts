import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'

import {
	StudentTableComponent,
} from '../../student'

@Component({
	selector: 'admin-page-student',
	template: `
		<admin-dashboard>
			<student-table
				class='center'
				[createUrl]="['/admin', 'murid', 'buat']">
			</student-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageStudentComponent implements AfterViewInit, OnInit {
	@ViewChild(StudentTableComponent) studentTableRef: StudentTableComponent
	constructor() { }
	ngAfterViewInit() {
		this.studentTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
