import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'curriculum-page-department-form',
	template: `
		<curriculum-dashboard>
			<department-form class='center'></department-form>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageDepartmentFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
