import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-subject-form',
	template: `
		<admin-dashboard>
			<subject-form class='center'></subject-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageSubjectFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
