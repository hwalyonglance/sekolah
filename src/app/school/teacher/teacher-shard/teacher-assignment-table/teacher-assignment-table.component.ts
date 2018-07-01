import {
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
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
	classColumns,
	subjectColumns,
	teacherColumns,
	Teacher,
	TeacherAssignmentV,
} from '../../../school-shard'

import {
	teacherAssignmentColumns,
} from '../../../school-shard'

@Component({
	selector: 'teacher-assignment-table',
	template: `
		<shard-table
			(create)='onCreate($event)'
			(deleteById)='onDeleteById($event)'
			(editById)='onEditById($event)'
			[columns]='columns'
			[extraRowMenus]='extraRowMenus'
			id='teacherAssignment_id'
			[pdf]='pdf'
			[showCreateMenu]='showCreateMenu'
			[showDeleteMenu]='showDeleteMenu'
			[showEditMenu]='showEditMenu'
			title='Penugasan Guru' tableName='teacher_assignments_v'>
		</shard-table>
	`,
	styles: [],
	host: {
		class: 'teacher-assignment-table'
	}
})
export class TeacherAssignmentTableComponent implements AfterViewInit, OnDestroy, OnInit {
	@Input() columns = teacherAssignmentColumns
	@Input() createUrl = ['/admin', 'teacher', 'assignment']
	@Input() extraRowMenus = []
	@Input() pdf = ''
	@Input() showCreateMenu = true
	@Input() showDeleteMenu = true
	@Input() showEditMenu = true

	@Output() editById = new EventEmitter

	@ViewChild(ShardTableComponent) shardTableRef: ShardTableComponent<any>

	get totalJam() {
		return this.shardTableRef.dataSource.data
			.reduce((acc, curr: TeacherAssignmentV) => acc+Number(curr.teacherAssignmentHour), 0)
	}
	get totalJamAktif() {
		return this.shardTableRef.dataSource.data
			.filter((r: TeacherAssignmentV) => r.teacherAssignmentStatus === 'Aktif')
			.reduce((acc, curr: TeacherAssignmentV) => acc+Number(curr.teacherAssignmentHour), 0)
	}
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
		console.log(evt, this.createUrl)
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
		this.editById.next(evt)
	}
}
