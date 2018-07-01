import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-home',
	template: `
		<admin-dashboard>
			<admin-profile class='center mat-elevation-z2'>
			</admin-profile>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageHomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
