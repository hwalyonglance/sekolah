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
	selector: 'curriculum-profile',
	template: `
		<table class='full-width mat-table p'>
			<colgroup style='width: 40%'></colgroup>
			<tr class='mat-row'>
				<td class='mat-cell'>
					ID
				</td>
				<td class='mat-cell'>
					{{ curriculum?._id }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Nama
				</td>
				<td class='mat-cell'>
					{{ curriculum?.name }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Username
				</td>
				<td class='mat-cell'>
					{{ curriculum?.username }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Alamat
				</td>
				<td class='mat-cell'>
					{{ curriculum?.address }}
				</td>
			</tr>
		</table>
	`,
	styles: [`
		:host {
			max-width: 500px;
		}
	`]
})
export class CurriculumProfileComponent implements OnInit {
	curriculum: Member = {}
	constructor(
		private _auth: AuthService,
	) {
		_auth.role.curriculum.subscribe((curriculum: Member) => {
			console.log('curriculum',curriculum)
			this.curriculum = curriculum
		})
	}
	ngOnInit() {}
}
