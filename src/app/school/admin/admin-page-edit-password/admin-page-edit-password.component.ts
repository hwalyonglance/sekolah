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
	selector: 'admin-page-edit-password',
	template: `
		<admin-dashboard>
			<shard-edit-password-form
				class='center'
				loginAS='Admin'
				[to]="['/admin']"
				[username]='username'>
			</shard-edit-password-form>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageEditPasswordComponent implements AfterViewInit, OnInit {
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
			this.shardEditPasswordRef.form.get('username').setValue(this._auth.role.admin.getValue().username)
		}, 10)
	}
	ngOnInit() {}
}
