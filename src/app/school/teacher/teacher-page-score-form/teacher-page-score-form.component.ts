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
	selector: 'teacher-page-score-form',
	template: `
		<teacher-dashboard>
			<score-form
				class='center'
				[submitUrl]="submitUrl">
			</score-form>
		</teacher-dashboard>
	`,
	styles: []
})
export class TeacherPageScoreFormComponent implements AfterViewInit, OnInit {
	@ViewChild(ScoreFormComponent) scoreFormRef: ScoreFormComponent
	get submitUrl() {
		const [
			slash,
			teacher,
			penugasan,
			teacherAssignment_id,
			nilai,
			buat,
		] = this._route.url.split('/')
		console.log(slash, teacher, penugasan, teacherAssignment_id, nilai)
		// return this._route.url.replace('/buat', '')
		return ['/'+teacher, penugasan, teacherAssignment_id, nilai]
	}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _route: Router,
	) {}
	ngAfterViewInit() {

	}
	ngOnInit() {}
}
