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
	curriculumColumns,
} from '../../../school-shard'

@Component({
	selector: 'curriculum-table',
	template: `
		<shard-table
			(create)='onCreate($event)'
			(deleteById)='onDeleteById($event)'
			(editById)='onEditById($event)'
			[columns]='columns'
			id='curriculum_id'
			title='Kurikulum' tableName='curriculums'>
		</shard-table>
	`,
	styles: [],
	host: {
		class: 'curriculum-table'
	}
})
export class CurriculumTableComponent implements AfterViewInit, OnDestroy, OnInit {
	@Input() createUrl = ['/admin', 'curriculum']

	@ViewChild(ShardTableComponent) shardTableRef: ShardTableComponent<any>

	@Input() columns = curriculumColumns
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
			to		: ['/admin', 'kurikulum', evt._opts.curriculum_id, 'ubah']
		})
	}
}
