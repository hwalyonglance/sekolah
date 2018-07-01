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
	selector: 'curriculum-page-subject',
	template: `
		<curriculum-dashboard>
			<subject-table
				class='center'
				[createUrl]="['/kurikulum', 'mapel', 'buat']">
			</subject-table>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageSubjectComponent implements AfterViewInit, OnInit {
	@ViewChild(SubjectTableComponent) sujectTableRef: SubjectTableComponent
	constructor() { }
	ngAfterViewInit() {
		this.sujectTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
