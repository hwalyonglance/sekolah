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
	selector: 'curriculum-page-student',
	template: `
		<curriculum-dashboard>
			<student-table
				class='center'
				[createUrl]="['/kurikulum', 'murid', 'buat']">
			</student-table>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageStudentComponent implements AfterViewInit, OnInit {
	@ViewChild(StudentTableComponent) studentTableRef: StudentTableComponent
	constructor() { }
	ngAfterViewInit() {
		this.studentTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
