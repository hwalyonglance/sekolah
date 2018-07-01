import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-login',
	template: `
		<div fxLayout='column' fxLayoutAlign='center center'>
			<admin-login-form class='center'></admin-login-form>
		</div>
	`,
	styles: [``],
})
export class AdminPageLoginComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
