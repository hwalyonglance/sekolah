import {
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
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
	scoreWStudentColumns,
	Score,
	ScoreV,
	StudentInScoreV,
	studentColumns,
	TeacherAssignmentV,
} from '../../../school-shard'

@Component({
	selector: 'score-table',
	template: `
		<shard-table
			[columns]='columns'
			(create)='onCreate($event)'
			(deleteById)='onDeleteById($event)'
			(editById)='onEditById($event)'
			id='score_id'
			[pdf]='pdf'
			[showCreateMenu]='showCreateMenu'
			[showRowMenuTrigger]='showRowMenuTrigger'
			title='Nilai' tableName='scores_v'>
		</shard-table>
	`,
	styles: [],
	host: {
		class: 'score-table'
	}
})
export class ScoreTableComponent implements AfterViewInit, OnDestroy, OnInit {
	@Input() pdf = ''
	@Input() createUrl = ['/admin', 'score', 'create']
	@Input() showCreateMenu = true
	@Input() showRowMenuTrigger = true

	@Output() editById = new EventEmitter

	@ViewChild(ShardTableComponent) shardTableRef: ShardTableComponent<any>

	@Input() columns = scoreWStudentColumns
	teacherAssignmentV: TeacherAssignmentV = {}
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
		this._router.navigate(this.createUrl)
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
		// let editUrl, [
		// 	slash,
		// 	admin,
		// 	kelas,
		// 	class_id,
		// 	penugasan,
		// 	guru,
		// 	teacherAssignment_id,
		// 	nilai,
		// ] = editUrl = this._router.url.split('/')
		// editUrl = [...editUrl, evt._opts.score_id, 'ubah']
		this.editById.next(evt)
		// evt.default({
		// 	to: editUrl
		// })
	}
	// onRefresh(evt: ShardEvent) {
	// 	evt.preventDefault()
	// 	this.shardTableRef.setData({
	// 		scoreTeacherAssignment_id: this.teacherAssignmentV.teacherAssignment_id,
	// 	}).subscribe()
	// }
}
