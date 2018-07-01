import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'

import {
	DepartmentTableComponent,
} from '../../department'

@Component({
	selector: 'curriculum-page-department',
	template: `
		<curriculum-dashboard>
			<department-table
				class='center'
				[createUrl]="['/kurikulum', 'jurusan', 'buat']">
			</department-table>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageDepartmentComponent implements AfterViewInit, OnInit {
	@ViewChild(DepartmentTableComponent) departmentTableRef: DepartmentTableComponent

	constructor() {}
	ngAfterViewInit() {
		this.departmentTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
