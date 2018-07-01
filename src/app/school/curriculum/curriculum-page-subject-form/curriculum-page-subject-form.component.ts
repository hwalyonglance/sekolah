import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'curriculum-page-subject-form',
	template: `
		<curriculum-dashboard>
			<subject-form class='center'></subject-form>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageSubjectFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
