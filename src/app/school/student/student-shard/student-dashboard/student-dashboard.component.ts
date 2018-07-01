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
	selector: 'student-dashboard',
	template: `
		<shard-dashboard>
			<div class='student-dashboard-sidenav' ngProjectAs='sidenav'>
				<mat-toolbar color='primary'>
					Menu
				</mat-toolbar>
				<mat-nav-list>
					<a mat-list-item routerLink='/murid/profil' routerLinkActive='active'> Profil </a>
					<a mat-list-item routerLink='/murid/lihat/nilai' routerLinkActive='active'> Lihat Nilai </a>
					<a mat-list-item [routerLink]="['/murid', 'ubah', 'password']" routerLinkActive='active'> Ubah Password </a>
				</mat-nav-list>
			</div>
			<div class='student-dashboard-toolbar' ngProjectAs='toolbar'>
				<span fxLayout='row'>
				<span class='pointer' fxFlex routerLink='/'> Sekolah </span>
					<span fxFlex='1 1 fill'></span>
					<ng-content select='toolbar'></ng-content>
					<button type='button' mat-button [matMenuTriggerFor]='dashboardMenu' xPosition='before'>
						{{ student?.name }}
					</button>
					<mat-menu #dashboardMenu='matMenu'>
						<button
							(click)="auth.logout('student', ['/masuk', 'murid'])"
							mat-menu-item>
							Keluar
						</button>
					</mat-menu>
				</span>
			</div>
			<div class='student-dashboard-content' ngProjectAs='content'>
				<ng-content></ng-content>
			</div>
		</shard-dashboard>
	`,
	styles: [`
		.student-dashboard-toolbar{
			width: 100%;
		}

	`]
})
export class StudentDashboardComponent implements OnInit {
	@ViewChild(ShardDashboardComponent) shardDashboardRef: ShardDashboardComponent
	get student$() { return this.auth.role.student }
	get student() { return this.auth.role.student.getValue() }
	constructor(
		private _router: Router,
		private _snackBar: MatSnackBar,
		public auth: AuthService,
	) {}
	ngOnInit() {}
}
