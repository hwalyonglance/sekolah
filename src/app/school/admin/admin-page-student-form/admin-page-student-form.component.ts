import { Component, OnInit } from '@angular/core'

import {
	ShardEvent,
} from '../../../shard'

@Component({
	selector: 'admin-page-student-form',
	template: `
		<admin-dashboard>
			<student-form class='center' (submit)='onSubmit($event)' [submitUrl]="['/admin','murid','buat']"></student-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageStudentFormComponent implements OnInit {
	constructor() { }
	ngOnInit() {
	}
	onSubmit(evt: ShardEvent){
		evt.preventDefault()
		evt.default({
			to	: ['/admin', 'murid']
		})
	}
}
