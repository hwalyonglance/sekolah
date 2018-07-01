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
	ApiService,
	AuthService,
	ShardEditPasswordFormComponent,
} from '../../../shard'

@Component({
	selector: 'teacher-page-edit-password',
	template: `
		<teacher-dashboard>
			<shard-edit-password-form
				class='center'
				loginAS='Guru'
				[to]="['/guru']"
				[username]='username'>
			</shard-edit-password-form>
		</teacher-dashboard>
	`,
	styles: []
})
export class TeacherPageEditPasswordComponent implements AfterViewInit, OnInit {
	@ViewChild(ShardEditPasswordFormComponent) shardEditPasswordRef: ShardEditPasswordFormComponent
	username = ''
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _auth: AuthService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		setTimeout(() => {
			this.shardEditPasswordRef.form.get('username').setValue(this._auth.role.teacher.getValue().username)
		}, 10)
	}
	ngOnInit() {}
}
