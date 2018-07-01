import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'
import { Router } from '@angular/router'

import {
	Menu,
} from '../../../shard'

import {
	ClassTableComponent
} from '../../class'

@Component({
	selector: 'teacher-page-class',
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
export class TeacherPageClassComponent implements AfterViewInit, OnInit {
	@ViewChild(ClassTableComponent) classTableRef: ClassTableComponent
	extraMainMenus: Menu[] =[]
	extraRowMenus: Menu[] =[
		{ icon: 'visibility', label: 'Lihat Murid', onClick: (row) => {
			this._router.navigate(['/guru', 'kelas', row.class_id, 'murid'])
		} }
	]
	showCreateMenu: boolean = false
	showEditMenu: boolean = false
	showDeleteMenu: boolean = false
	constructor(
		public _router: Router,
	) {}
	ngAfterViewInit() {
		this.classTableRef.shardTableRef.setData().subscribe()
	}
	ngOnInit() {
	}

}
