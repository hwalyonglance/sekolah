import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-teacher-assignment-form',
	template: `
		<admin-dashboard>
			<teacher-assignment-form class='center' [submitUrl]="['/admin', 'penugasan', 'guru']"></teacher-assignment-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageTeacherAssignmentFormComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
