import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'admin-page-class-form',
	template: `
		<admin-dashboard>
			<class-form [submitUrl]="['/admin', 'kelas']"></class-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageClassFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
