import {
	Component,
	HostListener,
	ViewChild,
} from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import {
	MatSidenav,
} from '@angular/material'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
	selector: 'shard-dashboard',
	templateUrl: './shard-dashboard.component.html',
	styles: [`
		.shard-dashboard-content{
			min-height: calc(100vh - 64px);
			padding: 32px !important;
		}
		@media(max-width: 599px){
			.shard-dashboard-content{
				min-height: calc(100vh - 56px);
			}
		}
	`]
})
export class ShardDashboardComponent {
	@ViewChild(MatSidenav) sidenavRef: MatSidenav
	isHandset$: Observable<boolean>
		= this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		)

	constructor(
		private breakpointObserver: BreakpointObserver
	) {

	}
	@HostListener('swiperight', ['$event'])
	onSwipeRight(evt){
		this.sidenavRef.open()
	}
}
