import {
	AfterViewInit,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	MatDialog,
	MatDialogRef,
	MatTableDataSource,
	MatSnackBar,
} from '@angular/material'
import {
	Router
} from '@angular/router'

import {
	ApiService,
	Column,
	ShardEvent,
	ShardTableComponent,
} from '../../../../shard'

import {
	teacherColumns,
} from '../../../school-shard'

@Component({
	selector: 'teacher-table',
	template: `
		<shard-table
			(create)='onCreate($event)'
			(deleteById)='onDeleteById($event)'
			(editById)='onEditById($event)'
			[columns]='columns'
			id='teacher_id'
			title='Guru' tableName='teachers'>
		</shard-table>
	`,
	styles: [],
	host: {
		class: 'teacher-table'
	}
})
export class TeacherTableComponent implements AfterViewInit, OnDestroy, OnInit {
	@Input() createUrl = ['/admin', 'teacher']

	@ViewChild(ShardTableComponent) shardTableRef: ShardTableComponent<any>

	@Input() columns = teacherColumns
	constructor(
		private _api: ApiService,
		private _dialog: MatDialog,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	ngAfterViewInit() {}
	ngOnDestroy() {}
	ngOnInit() {}
	onCreate(evt: ShardEvent) {
		evt.preventDefault()
		evt.default({
			to	: this.createUrl,
		})
	}
	onDeleteById(evt: ShardEvent) {
		// console.log(evt)
		evt.preventDefault()
		evt.default({
			ask		: `Yakin hapus data ini?`,
			cancel	: `Penghapusan dibatalkan.`,
			error	: `Gagal ketika menghapus data.`,
			deleted	: `Berhasil dihapus.`,
		})
	}
	onEditById(evt: ShardEvent) {
		evt.preventDefault()
		evt.default({
			to		: ['/admin', 'guru', evt._opts.teacher_id, 'ubah']
		})
	}
}
