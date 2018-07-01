import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'curriculum-page-login',
	template: `
		<div fxLayout='column' fxLayoutAlign='center center'>
			<curriculum-login-form class='center'></curriculum-login-form>
		</div>
	`,
	styles: [``],
})
export class CurriculumPageLoginComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
