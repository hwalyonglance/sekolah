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
	selector: 'teacher-page-class-student',
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
				[showCreateMenu]='showCreateMenu'
				[showEditMenu]='showEditMenu'
				[showDeleteMenu]='showDeleteMenu'
				[showRowMenuTrigger]='showRowMenuTrigger'
				style='margin-top: 32px;'>
			</class-student-table>
		</teacher-dashboard>
	`,
	styles: []
})
export class TeacherPageClassStudentComponent implements AfterViewInit, OnInit {
	@ViewChild(ClassStudentTableComponent) classStudentTableRef: ClassStudentTableComponent

	classV: ClassV = {}
	showCreateMenu = false
	showDeleteMenu = false
	showEditMenu = false
	showRowMenuTrigger = false
	params: any = {}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _router: Router,
	) { }
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
	ngOnInit() { }
	setData() {
		this.classStudentTableRef.shardTableRef.where
			= { classWStudentClass_id: this.params.class_id }
		// console.log('setData', this.classStudentTableRef.shardTableRef.where)
	}
}
