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
	selector: 'admin-page-class',
	template: `
		<admin-dashboard>
			<class-table
				class='center'
				[createUrl]="['/admin', 'kelas', 'buat']"
				[extraMainMenus]='extraMainMenus'
				[extraRowMenus]='extraRowMenus'
				[showCreateMenu]='showCreateMenu'
				[showEditMenu]='showEditMenu'>
			</class-table>
		</admin-dashboard>
	`,
	styles: []
})
export class AdminPageClassComponent implements AfterViewInit, OnInit {
	@ViewChild(ClassTableComponent) classTableRef: ClassTableComponent
	extraMainMenus: Menu[] =[]
	extraRowMenus: Menu[] =[
		{ icon: 'edit', label: 'Kelola Murid', onClick: (row) => {
			this._router.navigate(['/admin', 'kelas', row._id, 'murid'])
		} }
	]
	showCreateMenu: boolean = true
	showEditMenu: boolean = true
	constructor(
		public _router: Router,
	) {}
	ngAfterViewInit() {
		this.classTableRef.shardTableRef.refresh.subscribe(() => {
			this.setData()
		})
		this.setData()
	}
	ngOnInit() {
	}
	setData() {
		this.classTableRef.shardTableRef.setData().subscribe()
	}
}
