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
	selector: 'admin-page-class-student',
	template: `
		<admin-dashboard>
			<mat-expansion-panel>
				<mat-expansion-panel-header>
					Kelas
				</mat-expansion-panel-header>
				<table width='100%'>
					<colgroup style='width:33%'></colgroup>
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
			<br />
			<class-student-table
				[showCreateMenu]='showCreateMenu'
				[showEditMenu]='showEditMenu'>
			</class-student-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageClassStudentComponent implements AfterViewInit, OnInit {
	@ViewChild(ClassStudentTableComponent) classStudentTableRef: ClassStudentTableComponent

	classV: ClassV = {}
	showCreateMenu: boolean = false
	showEditMenu: boolean = false
	params: any = {}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		this.classStudentTableRef.shardTableRef.refresh.subscribe(() => {
			this.setData()
		})
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
		this.classStudentTableRef
			.shardTableRef.setData({classWStudentClass_id: this.params.class_id})
			.subscribe()
	}
}
