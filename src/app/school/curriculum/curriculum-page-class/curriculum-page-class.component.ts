import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	ActivatedRoute,
	Router,
} from '@angular/router'

import {
	Menu,
} from '../../../shard'

import {
	ClassTableComponent
} from '../../class'

@Component({
	selector: 'curriculum-page-class',
	template: `
		<curriculum-dashboard>
			<class-table
				class='center'
				[createUrl]="['/kurikulum', 'kelas', 'buat']"
				[extraMainMenus]='extraMainMenus'
				[extraRowMenus]='extraRowMenus'
				[showCreateMenu]='showCreateMenu'
				[showEditMenu]='showEditMenu'>
			</class-table>
		</curriculum-dashboard>
	`,
	styles: []
})
export class CurriculumPageClassComponent implements AfterViewInit, OnInit {
	@ViewChild(ClassTableComponent) classTableRef: ClassTableComponent
	extraMainMenus: Menu[] = []
	extraRowMenus: Menu[] = [
		{
			icon: 'edit', label: 'Kelola Murid', onClick: (row) => {
				this._router.navigate(['/kurikulum', 'kelas', row.class_id, 'murid'])
			}
		}
	]
	showCreateMenu: boolean = true
	showEditMenu: boolean = true
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
	) { }
	ngAfterViewInit() {
		this.classTableRef.shardTableRef.refresh.subscribe(() => {
			this.setData()
		})
		this._activatedRoute.params.subscribe((params) => {
			// console.log('params', params)
			this.setData()
		})
	}
	ngOnInit() {
	}
	setData() {
		this.classTableRef.shardTableRef.setData().subscribe()
	}
}
