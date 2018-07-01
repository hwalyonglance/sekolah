import { Component, OnInit } from '@angular/core'

import {
	ShardEvent,
} from '../../../shard'

@Component({
	selector: 'curriculum-page-student-form',
	template: `
		<curriculum-dashboard>
			<student-form
				class='center'
				(submit)='onSubmit($event)'
				[submitUrl]="['/kurikulum','murid','buat']">
			</student-form>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageStudentFormComponent implements OnInit {
	constructor() { }
	ngOnInit() {
	}
	onSubmit(evt: ShardEvent){
		evt.preventDefault()
		evt.default({
			to	: ['/curriculum', 'murid']
		})
	}
}
