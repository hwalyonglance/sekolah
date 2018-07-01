import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'curriculum-page-teacher-assignment-form',
	template: `
		<curriculum-dashboard>
			<teacher-assignment-form
				class='center'
				[submitUrl]="['/kurikulum', 'penugasan', 'guru']">
			</teacher-assignment-form>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageTeacherAssignmentFormComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
