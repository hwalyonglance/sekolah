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
	selector: 'student-profile',
	template: `
		<table class='full-width mat-table p'>
			<colgroup style='width: 40%'></colgroup>
			<tr class='mat-row'>
				<td class='mat-cell'>
					ID
				</td>
				<td class='mat-cell'>
					{{ student?._id }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					NIS
				</td>
				<td class='mat-cell'>
					{{ student?.NIM }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Nama
				</td>
				<td class='mat-cell'>
					{{ student?.name }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Username
				</td>
				<td class='mat-cell'>
					{{ student?.username }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Tanggal Lahir
				</td>
				<td class='mat-cell'>
					{{ student?.birthDate }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Orang Tua
				</td>
				<td class='mat-cell'>
					{{ student?.parent }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Alamat
				</td>
				<td class='mat-cell'>
					{{ student?.address }}
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
export class StudentProfileComponent implements OnInit {
	student: Member = {}
	constructor(
		private _auth: AuthService,
	) {
		_auth.role.student.subscribe((student: Member) => {
			console.log('student', student)
			this.student = student
		})
	}
	ngOnInit() {}
}
