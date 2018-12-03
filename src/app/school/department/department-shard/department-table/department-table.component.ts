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
} from '@angular/material'
import {
	Router,
} from '@angular/router'

import {
	ApiService,
	Column,
	ShardEvent,
	ShardTableComponent,
} from '../../../../shard'

import {
	departmentColumns,
} from '../../../school-shard'

@Component({
	selector: 'department-table',
	template: `
		<shard-table
			(create)='onCreate($event)'
			(deleteById)='onDeleteById($event)'
			(editById)='onEditById($event)'
			[columns]='columns'
			id='department_id'
			title='Jurusan' tableName='departments'>
		</shard-table>
	`,
	styles: [],
	host: {
		class: 'department-table'
	}
})
export class DepartmentTableComponent implements AfterViewInit, OnDestroy, OnInit {
	@Input() createUrl = ['/admin', 'department', 'create']

	@ViewChild(ShardTableComponent) shardTableRef: ShardTableComponent<any>

	@Input() columns = departmentColumns
	constructor(
		private _api: ApiService,
		private _dialog: MatDialog,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) { }
	ngAfterViewInit() { }
	ngOnDestroy() { }
	ngOnInit() { }
	onCreate(evt: ShardEvent) {
		evt.preventDefault()
		evt.default({
			to: this.createUrl
		})
	}
	onDeleteById(evt: ShardEvent) {
		// console.log(evt)
		evt.preventDefault()
		evt.default({
			ask: `Yakin hapus data ini?`,
			cancel: `Penghapusan dibatalkan.`,
			error: `Gagal ketika menghapus data.`,
			deleted: `Berhasil dihapus.`,
		})
	}
	onEditById(evt: ShardEvent) {
		// console.log(evt._opts)
		const editUrl = ['/admin', 'jurusan', evt._opts.department_id, 'ubah']
		// console.log(editUrl)
		evt.preventDefault()
		evt.default({
			to: editUrl
		})
	}
}
