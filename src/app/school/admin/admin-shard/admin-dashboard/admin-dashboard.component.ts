import {
	Component,
	OnInit,
	ViewChild,
} from '@angular/core'
import {
	MatExpansionPanel,
	MatSnackBar,
} from '@angular/material'
import {
	ActivatedRoute,
	Router,
} from '@angular/router'

import {
	AuthService,
	coerceBoolean,
	ShardDashboardComponent,
} from '../../../../shard'

export interface DocItem {
	id		?: string
	text	: string
	link	: string[]
}

export interface DocCategory {
	id		: string
	text	: string
	items	: DocItem[]
}

@Component({
	selector: 'admin-dashboard',
	template: `
		<shard-dashboard>
			<div class='admin-dashboard-sidenav' ngProjectAs='sidenav'>
				<mat-toolbar color='primary'>
					Menu
				</mat-toolbar>
				<mat-nav-list>
					<a *ngFor='let na of navs[0].items'
						mat-list-item
						[routerLink]='na.link'
						routerLinkActive='active'>
						{{ na.text }}
					</a>
				</mat-nav-list>
				<!--<mat-expansion-panel *ngFor='let nav of navs' [expanded]='panelIsOpened(nav.id)'>
					<mat-expansion-panel-header>
						<mat-panel-title><strong>{{ nav.text }}</strong></mat-panel-title>
					</mat-expansion-panel-header>
					<mat-nav-list>
						<a *ngFor='let na of nav.items'
							mat-list-item
							[routerLink]='na.link'
							routerLinkActive='active'>
							{{ na.text }}
						</a>
					</mat-nav-list>
				</mat-expansion-panel>-->
			</div>
			<div class='admin-dashboard-toolbar' ngProjectAs='toolbar'>
				<span fxLayout='row'>
					<span class='pointer' fxFlex routerLink='/'> Sekolah </span>
					<span fxFlex='1 1 fill'></span>
					<ng-content select='toolbar'></ng-content>
					<button type='button' mat-button [matMenuTriggerFor]='dashboardMenu' xPosition='before'>
						{{ admin?.name }}
					</button>
					<mat-menu #dashboardMenu='matMenu'>
						<button
							(click)="auth.logout('admin', ['/masuk', 'admin'])"
							mat-menu-item>
							Keluar
						</button>
					</mat-menu>
				</span>
			</div>
			<div class='admin-dashboard-content' ngProjectAs='content'>
				<ng-content></ng-content>
			</div>
		</shard-dashboard>
	`,
	styles: [`
		.admin-dashboard-toolbar{
			width: 100%;
		}
		.mat-expansion-panel-body{
			padding: 0 !important;
		}
	`]
})
export class AdminDashboardComponent implements OnInit {
	@ViewChild(ShardDashboardComponent) shardDashboardRef: ShardDashboardComponent
	get admin$() { return this.auth.role.admin }
	get admin() { return this.auth.role.admin.getValue() }
	navs: DocCategory[] = [
		{
			id: 'table',
			text: 'Tabel',
			items: [
				{ link: ['/admin', 'profil']				, text: 'Profil' },
				{ link: ['/admin', 'jurusan']				, text: 'Jurusan' },
				{ link: ['/admin', 'mapel']					, text: 'Mapel' },
				{ link: ['/admin', 'guru']					, text: 'Guru' },
				{ link: ['/admin', 'kurikulum']				, text: 'Kurikulum' },
				{ link: ['/admin', 'murid']					, text: 'Murid' },
				{ link: ['/admin', 'ubah', 'password']		, text: 'Ubah Password' },
				// { link: ['/admin', 'kelas'],				text: 'Kelas' },
				// { link: ['/admin', 'penugasan', 'guru'],	text: 'Penugasan Guru' },
			],
		},
		{
			id: 'form',
			text: 'Formulir',
			items: [
				{ link: ['/admin', 'kelas', 'buat'],				text: 'Kelas' },
				{ link: ['/admin', 'jurusan', 'buat'],				text: 'Jurusan' },
				{ link: ['/admin', 'mapel', 'buat'],				text: 'Mapel' },
				{ link: ['/admin', 'murid', 'buat'],				text: 'Murid' },
				{ link: ['/admin', 'penugasan', 'guru', 'buat'],	text: 'Penugasan Guru' },
			],
		},
	]
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
		private _snackBar: MatSnackBar,
		public auth: AuthService,
	) {}
	ngOnInit() {}
	panelIsOpened(id: string){
		// let gg: MatExpansionPanel
		// gg.open
		switch (id) {
			case 'form': return this._router.url.endsWith('buat')
			case 'table': return this._router.url.endsWith('buat')
		}
	}
}
