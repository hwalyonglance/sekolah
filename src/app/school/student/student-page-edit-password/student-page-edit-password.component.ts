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
	selector: 'student-page-edit-password',
	template: `
		<student-dashboard>
			<shard-edit-password-form
				class='center'
				loginAS='Murid'
				[to]="['/murid']"
				[username]='username'>
			</shard-edit-password-form>
		</student-dashboard>
	`,
	styles: []
})
export class StudentPageEditPasswordComponent implements AfterViewInit, OnInit {
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
			this.shardEditPasswordRef.form.get('username').setValue(this._auth.role.student.getValue().username)
		}, 10)
	}
	ngOnInit() {}
}
