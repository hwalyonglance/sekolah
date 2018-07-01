import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-curriculum-form',
	template: `
		<admin-dashboard>
			<curriculum-form class='center' [submitUrl]="['/admin', 'kurikulum']"></curriculum-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageCurriculumFormComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
