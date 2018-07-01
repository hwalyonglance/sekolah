import { Injectable } from '@angular/core';
import {
	MatSnackBar,
} from '@angular/material'
import {
	CanActivate,
	CanLoad,
	CanActivateChild,
	ActivatedRouteSnapshot,
	Route,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
	tap,
} from 'rxjs/operators'

import {
	AuthService,
} from '../../shard'

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanLoad, CanActivateChild {
	constructor(
		public auth: AuthService,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	checkState() {
		return this.auth.checkState('admin')
			.pipe(
				tap(authenticated => {
					// console.log('admin children guard authenticated', authenticated)
					if (!authenticated) {
						this._snackBar.open('Masuk terlebih dahulu.')._dismissAfter(4000)
						// console.log('adminDashboard guard: navigate to /admin/masuk')
						this._router.navigate(['/masuk', 'admin'])
					}
				})
			)
	}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> {
		// console.log('admin children guard begin')
		return this.checkState()
	}
	canLoad(route: Route): Observable<boolean> {
		return this.checkState()
	}
}

@Injectable({
	providedIn: 'root'
})
export class CurriculumGuard implements CanLoad, CanActivateChild {
	constructor(
		public auth: AuthService,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	checkState() {
		// console.log('kurikulum children guard begin')
		return this.auth.checkState('curriculum')
			.pipe(
				tap(authenticated => {
					// console.log('kurikulum children guard authenticated', authenticated)
					if (!authenticated) {
						this._snackBar.open('Masuk terlebih dahulu.')._dismissAfter(4000)
						// console.log('adminDashboard guard: navigate to /kurikulum/masuk')
						this._router.navigate(['/masuk', 'kurikulum'])
					}
				})
			)
	}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> {
		return this.checkState()
	}
	canLoad(route: Route): Observable<boolean> {
		return this.checkState()
	}
}

@Injectable({
	providedIn: 'root'
})
export class StudentGuard implements CanLoad, CanActivateChild {
	constructor(
		public auth: AuthService,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	checkState() {
		// console.log('murid children guard begin')
		return this.auth.checkState('student')
			.pipe(
				tap(authenticated => {
					// console.log('murid children guard authenticated', authenticated)
					if (!authenticated) {
						this._snackBar.open('Masuk terlebih dahulu.')._dismissAfter(4000)
						// console.log('adminDashboard guard: navigate to /murid/masuk')
						this._router.navigate(['/masuk', 'murid'])
					}
				})
			)
	}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> {
		return this.checkState()
	}
	canLoad(route: Route): Observable<boolean> {
		return this.checkState()
	}
}

@Injectable({
	providedIn: 'root'
})
export class TeacherGuard implements CanLoad, CanActivateChild {
	constructor(
		public auth: AuthService,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	checkState() {
		// console.log('guru children guard begin')
		return this.auth.checkState('teacher')
			.pipe(
				tap(authenticated => {
					// console.log('guru children guard authenticated', authenticated)
					if (!authenticated) {
						this._snackBar.open('Masuk terlebih dahulu.')._dismissAfter(4000)
						// console.log('adminDashboard guard: navigate to /guru/masuk')
						this._router.navigate(['/masuk', 'guru'])
					}
				})
			)
	}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> {
		return this.checkState()
	}
	canLoad(route: Route): Observable<boolean> {
		return this.checkState()
	}
}
