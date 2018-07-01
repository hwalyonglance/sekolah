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
				[createUrl]="['/guru', 'kelas', 'buat']"
				[extraMainMenus]='extraMainMenus'
				[extraRowMenus]='extraRowMenus'
				[showCreateMenu]='showCreateMenu'
				[showDeleteMenu]='showDeleteMenu'
				[showEditMenu]='showEditMenu'>
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
		} }
	]
	showCreateMenu: boolean = false
	showEditMenu: boolean = false
	showDeleteMenu: boolean = false
	constructor(
		private _auth: AuthService,
		private _router: Router,
	) {}
	ngAfterViewInit() {
		this.setData()
		this.classTableRef.shardTableRef.refresh.subscribe(() => {
			this.setData()
		})
	}
	ngOnInit() {}
	setData() {
		const teacher_id = this._auth.role.teacher.getValue()._id
		this.classTableRef.shardTableRef.setData({
			classHomeroomTeacher_id: teacher_id,
		}).subscribe()
	}
}
