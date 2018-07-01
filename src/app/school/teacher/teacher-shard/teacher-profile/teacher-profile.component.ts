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
	selector: 'teacher-profile',
	template: `
		<table class='full-width mat-table p'>
			<colgroup style='width: 40%'></colgroup>
			<tr class='mat-row'>
				<td class='mat-cell'>
					ID
				</td>
				<td class='mat-cell'>
					{{ teacher?._id }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					NIP
				</td>
				<td class='mat-cell'>
					{{ teacher?.NIM }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Nama
				</td>
				<td class='mat-cell'>
					{{ teacher?.name }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Username
				</td>
				<td class='mat-cell'>
					{{ teacher?.username }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					No. Telp
				</td>
				<td class='mat-cell'>
					{{ teacher?.telp }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Alamat
				</td>
				<td class='mat-cell'>
					{{ teacher?.address }}
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
export class TeacherProfileComponent implements OnInit {
	teacher: Member = {}
	constructor(
		private _auth: AuthService,
	) {
		_auth.role.teacher.subscribe((teacher: Member) => {
			this.teacher = teacher
		})
	}
	ngOnInit() {}
}
