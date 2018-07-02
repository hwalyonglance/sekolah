import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'
import { Router } from '@angular/router'

import {
	Menu,
	AuthService,
} from '../../../shard'

import {
	ClassTableComponent
} from '../../class'

@Component({
	selector: 'teacher-page-hoomeroom-class',
	template: `
		<teacher-dashboard>
			<class-table
				class='center'
				[extraMainMenus]='extraMainMenus'
				[extraRowMenus]='extraRowMenus'
				[showCreateMenu]='false'
				[showDeleteMenu]='false'
				[showEditMenu]='false'>
			</class-table>
		</teacher-dashboard>
	`,
	styles: []
})
export class TeacherPageHomeroomClassComponent implements AfterViewInit, OnInit {
	@ViewChild(ClassTableComponent) classTableRef: ClassTableComponent
	extraMainMenus: Menu[] =[]
	extraRowMenus: Menu[] =[
		{ icon: 'visibility', label: 'Lihat Murid', onClick: (row) => {
			this._router.navigate(['/guru', 'wali_kelas', row.class_id, 'murid'])
		} },
		{ icon: 'visibility', label: 'Lihat Nilai', onClick: (row) => {
			this._router.navigate(['/guru', 'wali_kelas', row.class_id, 'nilai'])
		} }
	]
	constructor(
		private _auth: AuthService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		const teacher_id = this._auth.role.teacher.getValue()._id
		this.classTableRef.shardTableRef.where = {
			classHomeroomTeacher_id: teacher_id,
		}
	}
	ngOnInit() {}
}
