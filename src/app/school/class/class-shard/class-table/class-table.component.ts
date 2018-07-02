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
	Router
} from '@angular/router'

import {
	ApiService,
	Column,
	Menu,
	ShardEvent,
	ShardTableComponent,
} from '../../../../shard'

import {
	classColumns,
} from '../../../school-shard'

@Component({
	selector: 'class-table',
	template: `
		<shard-table
			(create)='onCreate($event)'
			(deleteById)='onDeleteById($event)'
			(editById)='onEditById($event)'
			[columns]='columns'
			[extraMainMenus]='extraMainMenus'
			[extraRowMenus]='extraRowMenus'
			id='class_id'
			[showCreateMenu]='showCreateMenu'
			[showDeleteMenu]='showDeleteMenu'
			[showEditMenu]='showEditMenu'
			title='Kelas' tableName='classes_v'>
		</shard-table>
	`,
	styles: [],
	host: {
		class: 'class-table'
	}
})
export class ClassTableComponent implements AfterViewInit, OnDestroy, OnInit {
	@Input() createUrl = ['/admin', 'class', 'create']
	@Input() extraMainMenus: Menu[] = []
	@Input() extraRowMenus: Menu[] = []

	@Input() showCreateMenu: boolean = true
	@Input() showDeleteMenu: boolean = true
	@Input() showEditMenu: boolean = true

	@Input() showMainMenuTrigger: boolean = true
	@Input() showRowMenuTrigger: boolean = true

	@ViewChild(ShardTableComponent) shardTableRef: ShardTableComponent<any>

	@Input() columns = classColumns
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
			to: this.createUrl
		})
	}
	onDeleteById(evt: ShardEvent){
		// console.log(evt)
		evt.preventDefault()
		evt.default({
			ask		: `Yakin hapus data ini?`,
			cancel	: `Penghapusan dibatalkan.`,
			error	: `Gagal ketika menghapus data.`,
			deleted	: `Berhasil dihapus.`,
		})
	}
	onEditById(evt: ShardEvent){
		evt.preventDefault()
		console.log(evt._opts)
		evt.default({
			to: ['/kurikulum','kelas', evt._opts.class_id, 'ubah']
		})
	}
}
