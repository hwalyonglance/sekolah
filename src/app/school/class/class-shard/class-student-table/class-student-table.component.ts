import {
	AfterViewInit,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MatTableDataSource,
	MatSnackBar,
	MatSort,
} from '@angular/material'
import {
	ActivatedRoute,
	Router,
} from '@angular/router'

import {
	ApiService,
	Column,
	Menu,
	ShardEvent,
	ShardTableComponent,
} from '../../../../shard'

import {
	classStudentColumns,
	ClassV,
	ClassWStudentV,
	Student,
} from '../../../school-shard'

@Component({
	selector: 'class-student-table',
	template: `
		<shard-table
			[columns]='columns'
			(deleteById)='onDeleteById($event)'
			[extraMainMenus]='extraMainMenus'
			[extraRowMenus]='extraRowMenus'
			id='classWStudentStudent_id'
			[showCreateMenu]='showCreateMenu'
			[showDeleteMenu]='showDeleteMenu'
			[showEditMenu]='showEditMenu'
			[showRowMenuTrigger]='showRowMenuTrigger'
			title='Murid'
			tableName='students_in_classes_v'>
		</shard-table>
	`,
	styles: [],
	host: {
		class: 'class-student-table'
	}
})
export class ClassStudentTableComponent implements AfterViewInit, OnDestroy, OnInit {

	@Input() createUrl = ['/admin', 'class', 'create']

	@Input() extraMainMenus: Menu[] = []
	@Input() extraRowMenus: Menu[] = []

	@Input() showCreateMenu = true
	@Input() showDeleteMenu = true
	@Input() showEditMenu = true
	@Input() showRowMenuTrigger = true

	@ViewChild(ShardTableComponent) shardTableRef: ShardTableComponent<any>
	@ViewChild(MatSort) sortRef: MatSort

	@Input() columns = classStudentColumns
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _api: ApiService,
		private _dialog: MatDialog,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {
		_activatedRoute.params.subscribe(
			(params) => {
				// console.log('params', params)
			}
		)
	}
	ngAfterViewInit() { }
	ngOnDestroy() { }
	ngOnInit() { }
	onDeleteById(evt: ShardEvent) {
		// console.log('onDeleteById', evt)
		evt.preventDefault()
		const table = this.shardTableRef.tableName
		evt.default({
			ask: `Yakin hapus data ini?`,
			cancel: `Penghapusan dibatalkan.`,
			error: `Gagal ketika menghapus data.`,
			deleted: `Berhasil dihapus.`,
			table: `classes_with_students`,
		})
	}
}
