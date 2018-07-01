import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'student-page-login',
	template: `
		<div fxLayout='column' fxLayoutAlign='center center'>
			<student-login-form
				class='center'>
			</student-login-form>
		</div>
	`,
	styles: []
})
export class StudentPageLoginComponent implements OnInit {
	constructor(
	) {
	}
	ngOnInit() {}
}
