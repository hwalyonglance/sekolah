import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'student-page-home',
	template: `
		<student-dashboard>
			<student-profile class='center mat-elevation-z2'>
			</student-profile>
		</student-dashboard>
	`,
	styles: []
})
export class StudentPageHomeComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
