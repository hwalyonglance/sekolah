import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'curriculum-page-class-form',
	template: `
		<curriculum-dashboard>
			<class-form
				class='center'
				[submitUrl]="['/kurikulum', 'kelas']">
			</class-form>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageClassFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
