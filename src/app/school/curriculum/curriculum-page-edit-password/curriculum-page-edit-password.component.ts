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
	selector: 'curriculum-page-edit-password',
	template: `
		<curriculum-dashboard>
			<shard-edit-password-form
				class='center'
				loginAS='Kurikulum'
				[to]="['/kurikulum']"
				[username]='username'>
			</shard-edit-password-form>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageEditPasswordComponent implements AfterViewInit, OnInit {
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
			this.shardEditPasswordRef.form.get('username').setValue(this._auth.role.curriculum.getValue().username)
		}, 10)
	}
	ngOnInit() {}
}
