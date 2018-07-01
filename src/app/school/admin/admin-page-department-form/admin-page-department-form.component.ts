import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-department-form',
	template: `
		<admin-dashboard>
			<department-form class='center'></department-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageDepartmentFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
