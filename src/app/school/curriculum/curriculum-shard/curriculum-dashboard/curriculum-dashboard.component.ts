import {
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	MatSnackBar,
} from '@angular/material'
import {
	Router,
} from '@angular/router'

import {
	AuthService,
	coerceBoolean,
	ShardDashboardComponent,
} from '../../../../shard'

@Component({
	selector: 'curriculum-dashboard',
	template: `
		<shard-dashboard>
			<div class='curriculum-dashboard-sidenav' ngProjectAs='sidenav'>
				<mat-toolbar color='primary'>
					Menu
				</mat-toolbar>
				<mat-nav-list>
					<a (click)='pindah(navs[0].link)' mat-list-item routerLinkActive='active'>{{navs[0].text}}</a>
					<a (click)='pindah(navs[1].link)' mat-list-item routerLinkActive='active'>{{navs[1].text}}</a>
					<a (click)='pindah(navs[2].link)' mat-list-item routerLinkActive='active'>{{navs[2].text}}</a>
					<a (click)='pindah(navs[3].link)' mat-list-item routerLinkActive='active'>{{navs[3].text}}</a>
					<a (click)='pindah(navs[4].link)' mat-list-item routerLinkActive='active'>{{navs[4].text}}</a>
					<a (click)='pindah(navs[5].link)' mat-list-item routerLinkActive='active'>{{navs[5].text}}</a>
					<a (click)='pindah(navs[6].link)' mat-list-item routerLinkActive='active'>{{navs[6].text}}</a>
				</mat-nav-list>
			</div>
			<div class='curriculum-dashboard-toolbar' ngProjectAs='toolbar'>
				<span fxLayout='row'>
					<span class='pointer' fxFlex routerLink='/'> Sekolah </span>
					<span fxFlex='1 1 fill'></span>
					<ng-content select='toolbar'></ng-content>
					<button type='button' mat-button [matMenuTriggerFor]='dashboardMenu' xPosition='before'>
						{{ curriculum?.name }}
					</button>
					<mat-menu #dashboardMenu='matMenu'>
						<button
							(click)="auth.logout('curriculum', ['/masuk', 'kurikulum'])"
							mat-menu-item>
							Keluar
						</button>
					</mat-menu>
				</span>
			</div>
			<div class='curriculum-dashboard-content' ngProjectAs='content'>
				<ng-content></ng-content>
			</div>
		</shard-dashboard>
	`,
	styles: [`
		.curriculum-dashboard-toolbar{
			width: 100%;
		}
		.active{
			background-color: #e3f2fd;
			border-left: 2px solid #2196f3;
		}
	`]
})
export class CurriculumDashboardComponent implements OnInit {
	@ViewChild(ShardDashboardComponent) shardDashboardRef: ShardDashboardComponent
	get curriculum$() { return this.auth.role.curriculum }
	get curriculum() { return this.auth.role.curriculum.getValue() }
	get navs() {
		// return []
		return [
			{ link: ['/', 'kurikulum', 'profil']			, text: 'Profil' },
			{ link: ['/', 'kurikulum', 'jurusan']			, text: 'Jurusan' },
			{ link: ['/', 'kurikulum', 'mapel']				, text: 'Mapel' },
			{ link: ['/', 'kurikulum', 'murid']				, text: 'Murid' },
			{ link: ['/', 'kurikulum', 'kelas']				, text: 'Kelas' },
			{ link: ['/', 'kurikulum', 'penugasan', 'guru']	, text: 'Penugasan Guru' },
			{ link: ['/', 'kurikulum', 'ubah', 'password']	, text: 'Ubah Password' },
		]
	}
	constructor(
		public auth: AuthService,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	ngOnInit() {}
	pindah(ke: string[]) {
		this._router.navigate(ke)
	}
}
