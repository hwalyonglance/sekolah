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
	selector: 'admin-page-department',
	template: `
		<admin-dashboard>
			<department-table
				class='center'
				[createUrl]="['/admin', 'jurusan', 'buat']">
			</department-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageDepartmentComponent implements AfterViewInit, OnInit {
	@ViewChild(DepartmentTableComponent) departmentTableRef: DepartmentTableComponent

	constructor() {}
	ngAfterViewInit() {
		this.departmentTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
