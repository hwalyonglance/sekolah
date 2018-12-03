import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	Router,
} from '@angular/router'

import {
	Menu,
	ShardEvent,
} from '../../../shard'
import {
	TeacherAssignmentV,
} from '../../school-shard'

import {
	TeacherAssignmentTableComponent,
} from '../../teacher'

@Component({
	selector: 'curriculum-page-teacher-assignment',
	template: `
		<curriculum-dashboard>
			<teacher-assignment-table
				class='center'
				[createUrl]="['/kurikulum', 'penugasan', 'guru', 'buat']"
				[extraRowMenus]='extraRowMenus'
				(editById)='onEditById($event)'
				pdf='penugasan_guru'>
			</teacher-assignment-table>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageTeacherAssignmentComponent implements AfterViewInit, OnInit {
	@ViewChild(TeacherAssignmentTableComponent) teacherAssignmentTableRef: TeacherAssignmentTableComponent

	@Input() extraRowMenus: Menu[] = [
		{
			icon: 'visibility', label: 'Lihat Nilai', onClick: (row: TeacherAssignmentV) => {
				// console.log('teacherAssignment row', row)
				const nilaiUrl = ['/kurikulum', 'kelas', row.class_id, 'penugasan', 'guru', row.teacherAssignment_id, 'nilai']
				this._router.navigate(nilaiUrl)
			}
		}
	]
	constructor(
		private _router: Router,
	) { }
	ngAfterViewInit() {
		this.teacherAssignmentTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() { }
	onEditById(evt: ShardEvent) {
		// console.log(evt)
		this._router.navigate(['/kurikulum', 'penugasan', 'guru', evt._opts.teacherAssignment_id, 'ubah'])
	}
}
