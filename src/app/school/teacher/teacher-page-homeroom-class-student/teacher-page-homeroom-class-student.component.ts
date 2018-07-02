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
	Menu,
	ShardEvent,
} from '../../../shard'
import {
	ClassV,
	ClassWStudentV,
} from '../../school-shard'

import {
	ClassTableComponent,
	ClassStudentTableComponent,
} from '../../class'

@Component({
	selector: 'teacher-page-homeroom-class-student',
	template: `
		<teacher-dashboard>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Kelas
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='width:33%'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							ID
						</td>
						<td class='mat-cell'>
							{{classV?.class_id}}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Kode
						</td>
						<td class='mat-cell'>
							{{classV?.classCode}}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{classV?.className}}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Jurusan
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='width:33%'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Kode
						</td>
						<td class='mat-cell'>
							{{classV?.departmentCode}}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{classV?.departmentName}}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Wali Kelas
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='width:33%'></colgroup>
					<tr class='mat-row'>
						<td class='mat-cell'>
							NIP
						</td>
						<td class='mat-cell'>
							{{classV?.homeroomTeacherNIM}}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Nama
						</td>
						<td class='mat-cell'>
							{{classV?.homeroomTeacherName}}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							No. Telp.
						</td>
						<td class='mat-cell'>
							{{classV?.homeroomTeacherTelp}}
						</td>
					</tr>
					<tr class='mat-row'>
						<td class='mat-cell'>
							Alamat
						</td>
						<td class='mat-cell'>
							{{classV?.homeroomTeacherAddress}}
						</td>
					</tr>
				</table>
			</mat-expansion-panel>
			<class-student-table
				[extraRowMenus]='extraRowMenus'
				[showCreateMenu]='false'
				[showEditMenu]='false'
				[showDeleteMenu]='false'
				style='margin-top: 32px;'>
			</class-student-table>
		</teacher-dashboard>
	`,
	styles: []
})
export class TeacherPageHomeroomClassStudentComponent implements AfterViewInit, OnInit {
	@ViewChild(ClassStudentTableComponent) classStudentTableRef: ClassStudentTableComponent

	classV: ClassV = {}
	extraRowMenus: Menu[] = [
		{ icon: 'visibility', label: 'Lihat Nilai', onClick: (row) => {
			const [
				slash,
				teacher,
				wali_kelas,
				class_id,
				murid
			] = this._router.url.split('/')
			const to = ['/guru', 'wali_kelas', class_id, 'murid', row.student_id, 'nilai']
			console.log(row, to)
			this._router.navigate(to)
		} }
	]
	params: any = {}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _auth: AuthService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		this._activatedRoute.params
			.subscribe(
				(params) => {
					// console.log('params', params)
					const {
						class_id
					} = this.params = params
					this._api.getBy('classes_v', 'class_id', class_id)
						.subscribe(
							(classV: ClassV) => {
								// console.log('classV', classV)
								this.classV = classV
								this.setData()
							}
						)
				}
			)
	}
	ngOnInit() {}
	setData() {
		const teacher_id = this._auth.role.teacher.getValue()._id
		this.classStudentTableRef.shardTableRef.where = {
			classWStudentClass_id: this.params.class_id,
			homeroomTeacher_id: teacher_id
		}
	}
}
