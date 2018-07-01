import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'teacher-page-home',
	template: `
		<teacher-dashboard>
			<teacher-profile class='center mat-elevation-z2'>
			</teacher-profile>
		</teacher-dashboard>
	`,
	styles: []
})
export class TeacherPageHomeComponent implements OnInit {
	constructor() { }
	ngOnInit() {
	}
}
