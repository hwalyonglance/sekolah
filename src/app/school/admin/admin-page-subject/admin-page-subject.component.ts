import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'

import {
	SubjectTableComponent,
} from '../../subject'

@Component({
	selector: 'admin-page-subject',
	template: `
		<admin-dashboard>
			<subject-table
				class='center'
				[createUrl]="['/admin', 'mapel', 'buat']">
			</subject-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageSubjectComponent implements AfterViewInit, OnInit {
	@ViewChild(SubjectTableComponent) sujectTableRef: SubjectTableComponent
	constructor() { }
	ngAfterViewInit() {
		this.sujectTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
