import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'curriculum-page-home',
	template: `
		<curriculum-dashboard>
			<curriculum-profile class='center mat-elevation-z2'>
			</curriculum-profile>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageHomeComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
