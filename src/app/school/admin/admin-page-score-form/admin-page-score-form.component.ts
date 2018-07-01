import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	ActivatedRoute,
	Router,
} from '@angular/router'

import {
	ScoreFormComponent,
} from '../../score'

@Component({
	selector: 'admin-page-score-form',
	template: `
		<admin-dashboard>
			<score-form
				[submitUrl]="submitUrl">
			</score-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageScoreFormComponent implements AfterViewInit, OnInit {
	@ViewChild(ScoreFormComponent) scoreFormRef: ScoreFormComponent
	get submitUrl() {
		const [
			slash,
			admin,
			kelas,
			class_id,
			penugasan,
			guru,
			teacherAssignment_id,
			nilai,
			buat,
		] = this._route.url.split('/')
		console.log(slash, admin, kelas, class_id, penugasan, guru, teacherAssignment_id, nilai)
		// return this._route.url.replace('/buat', '')
		return ['/'+admin, kelas, class_id, penugasan, guru, teacherAssignment_id, nilai]
	}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _route: Router,
	) {}
	ngAfterViewInit() {

	}
	ngOnInit() {}
}
