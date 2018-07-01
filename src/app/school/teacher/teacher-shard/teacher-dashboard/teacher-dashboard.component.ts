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
	selector: 'teacher-dashboard',
	template: `
		<shard-dashboard>
			<div class='teacher-dashboard-sidenav' ngProjectAs='sidenav'>
				<mat-toolbar color='primary'>
					Menu
				</mat-toolbar>
				<mat-nav-list>
					<a mat-list-item routerLink='/guru/profil' routerLinkActive='active'> Profil </a>
					<a mat-list-item routerLink='/guru/kelas' routerLinkActive='active'> Kelas </a>
					<a mat-list-item routerLink='/guru/penugasan' routerLinkActive='active'> Penugasan </a>
					<a mat-list-item routerLink='/guru/wali_kelas' routerLinkActive='active'> Wali Kelas </a>
					<a mat-list-item routerLink='/guru/ubah/password' routerLinkActive='active'> Ubah Password </a>
				</mat-nav-list>
			</div>
			<div class='teacher-dashboard-toolbar' ngProjectAs='toolbar'>
				<span fxLayout='row'>
				<span class='pointer' fxFlex routerLink='/'> Sekolah </span>
					<span fxFlex='1 1 fill'></span>
					<ng-content select='toolbar'></ng-content>
					<button type='button' mat-button [matMenuTriggerFor]='dashboardMenu' xPosition='before'>
						{{ teacher?.name }}
					</button>
					<mat-menu #dashboardMenu='matMenu'>
						<button
							(click)="auth.logout('teacher', ['/masuk', 'guru'])"
							mat-menu-item>
							Keluar
						</button>
					</mat-menu>
				</span>
			</div>
			<div class='teacher-dashboard-content' ngProjectAs='content'>
				<ng-content></ng-content>
			</div>
		</shard-dashboard>
	`,
	styles: [`
		.teacher-dashboard-toolbar{
			width: 100%;
		}
	`]
})
export class TeacherDashboardComponent implements OnInit {
	@ViewChild(ShardDashboardComponent) shardDashboardRef: ShardDashboardComponent
	get teacher$() { return this.auth.role.teacher }
	get teacher() { return this.auth.role.teacher.getValue() }
	constructor(
		public auth: AuthService,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	ngOnInit() {}
}
