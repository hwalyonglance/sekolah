import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-teacher-form',
	template: `
		<admin-dashboard>
			<teacher-form class='center' [submitUrl]="['/admin', 'guru']"></teacher-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageTeacherFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
