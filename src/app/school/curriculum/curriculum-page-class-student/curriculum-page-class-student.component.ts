import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	MatDialog,
	MatDialogRef,
} from '@angular/material'
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
	Student,
} from '../../school-shard'

import {
	ClassTableComponent,
	ClassStudentTableComponent,
} from '../../class'

import {
	StudentTableComponent,
} from '../../student'

@Component({
	selector: 'curriculum-page-class-student',
	template: `
		<curriculum-dashboard>
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
				[extraMainMenus]='extraMainMenus'
				[showCreateMenu]='showCreateMenu'
				[showEditMenu]='showEditMenu'
				style='margin-top: 32px;'>
			</class-student-table>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageClassStudentComponent implements AfterViewInit, OnInit {
	private _studentTableDialogRef: MatDialogRef<StudentTableComponent>
	@Input() extraMainMenus: Menu[] =[
		{ icon: 'add', label: 'Tambah', onClick: () => {
			console.log('ini dia')
			this._studentTableDialogRef = this._dialog.open(StudentTableComponent)
			this._studentTableDialogRef.componentInstance.shardTableRef.rowClick
				.subscribe(
					(evt: ShardEvent) => {
						const _opts: Student = evt._opts
						evt.preventDefault()
						console.log('rowClick', evt._opts)
						console.log('classV', this.classV)
						const confirmText
							= `Tambahkan Murid dengan nama "${_opts.studentName}" `
							+ `ke Kelas "${this.classV.className}"`

						if ( confirm(confirmText) ) {
							this._api
								.insert('classes_with_students', {
									classWStudentClass_id	: this.classV.class_id,
									classWStudentStudent_id	: _opts.student_id,
								})
								.subscribe(
									(r) => {
										console.log('rrr', r)
										if (r) {
											this.setData()
											this._studentTableDialogRef.close()
										}
									},
								)
						}
					}
				)
			this._studentTableDialogRef.componentInstance.shardTableRef.title = 'Murid'
			this._studentTableDialogRef.componentInstance.shardTableRef.tableName = 'students_not_in_classes_v'
			this._studentTableDialogRef.componentInstance.shardTableRef.showMainMenuTrigger = false
			this._studentTableDialogRef.componentInstance.shardTableRef.showRowMenuTrigger = false
			this._studentTableDialogRef.componentInstance.shardTableRef.setData().subscribe()
			this._studentTableDialogRef.afterClosed()
				.subscribe(() => this._studentTableDialogRef = null)
		} }
	]
	@ViewChild(ClassStudentTableComponent) classStudentTableRef: ClassStudentTableComponent

	classV: ClassV = {}
	showCreateMenu: boolean = false
	showEditMenu: boolean = false
	params: any = {}
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _dialog: MatDialog,
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
		this.classStudentTableRef.shardTableRef.where = {
			classWStudentClass_id: this.params.class_id,
		}
	}
}
