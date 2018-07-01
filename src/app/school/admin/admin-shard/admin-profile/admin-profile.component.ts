import {
	Component,
	OnInit,
} from '@angular/core'

import {
	AuthService,
} from '../../../../shard'

import {
	Member,
} from '../../../school-shard'

@Component({
	selector: 'admin-profile',
	template: `
		<table class='full-width mat-table p'>
			<colgroup style='width: 40%'></colgroup>
			<tr class='mat-row'>
				<td class='mat-cell'>
					ID
				</td>
				<td class='mat-cell'>
					{{ admin?._id }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Nama
				</td>
				<td class='mat-cell'>
					{{ admin?.name }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Username
				</td>
				<td class='mat-cell'>
					{{ admin?.username }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Alamat
				</td>
				<td class='mat-cell'>
					{{ admin?.address }}
				</td>
			</tr>
		</table>
	`,
	styles: [`
		:host {
			max-width: 600px;
			width: 400px;
		}
	`]
})
export class AdminProfileComponent implements OnInit {
	admin: Member = {}
	constructor(
		private _auth: AuthService,
	) {
		_auth.role.admin.subscribe((admin: Member) => {
			this.admin = admin
		})
	}
	ngOnInit() {}
}
