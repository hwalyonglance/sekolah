import {
	Component,
	OnInit,
} from '@angular/core'

import {
	ApiService,
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
					{{ student?.student_id }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					NIS
				</td>
				<td class='mat-cell'>
					{{ student?.studentNIM }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Nama
				</td>
				<td class='mat-cell'>
					{{ student?.studentName }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Username
				</td>
				<td class='mat-cell'>
					{{ student?.studentUsername }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Tanggal Lahir
				</td>
				<td class='mat-cell'>
					{{ student?.studentBirthDate }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Orang Tua
				</td>
				<td class='mat-cell'>
					{{ student?.studentParent }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Alamat
				</td>
				<td class='mat-cell'>
					{{ student?.studentAddress }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Jurusan
				</td>
				<td class='mat-cell'>
					{{ student?.departmentName }}
				</td>
			</tr>
			<tr class='mat-row'>
				<td class='mat-cell'>
					Kelas
				</td>
				<td class='mat-cell'>
					{{ student?.className }}
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
	student: any = {}
	constructor(
		private _api: ApiService,
		private _auth: AuthService,
	) {
		_auth.role.student.subscribe((student: Member) => {
			// console.log('student', student)
			this._api.getBy('classes_with_students_v', 'student_id', student._id)
				.subscribe(student => this.student = student)
		})
	}
	ngOnInit() { }
}
