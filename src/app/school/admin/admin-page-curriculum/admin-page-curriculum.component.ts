import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'

import {
	CurriculumTableComponent,
} from '../../curriculum'

@Component({
	selector: 'admin-page-curriculum',
	template: `
		<admin-dashboard>
			<curriculum-table class='center' [createUrl]="['/admin', 'kurikulum', 'buat']"></curriculum-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageCurriculumComponent implements AfterViewInit, OnInit {
	@ViewChild(CurriculumTableComponent) curriculumTableRef: CurriculumTableComponent
	constructor() {}
	ngAfterViewInit() {
		this.curriculumTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {}
}
