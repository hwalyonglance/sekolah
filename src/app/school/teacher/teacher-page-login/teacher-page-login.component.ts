import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'teacher-page-login',
	template: `
		<div fxLayout='column' fxLayoutAlign='center center'>
			<teacher-login-form></teacher-login-form>
		</div>
	`,
	styles: [],
	host: {
		class: 'teacher-page-login',
	},
})
export class TeacherPageLoginComponent implements OnInit {
	constructor(
	) {
	}
	ngOnInit() {}
}
