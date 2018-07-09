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
	lowerFirst,
} from 'lodash'

@Component({
	selector: 'school-login',
	template: `
		<mat-toolbar color='primary'>
			<button mat-button routerLink='/'>
				<mat-icon>arrow_back</mat-icon>
				Kembali
			</button>
		</mat-toolbar>
		<div fxLayout='row' fxLayoutAlign='center' style='margin-top: 100px'>
			<shard-login-form
				[loginAs]='loginAs'
				[role]='role'
				(submit)='onSubmit($event)'
				[to]="to">
				<img class='center' src='../../../assets/pasundan/18-56-03-images.jpg' style='width: 300px'>
			</shard-login-form>
		</div>
	`,
	styles: [],
	host: {
		class: 'center',
	}
})
export class SchoolLoginComponent implements AfterViewInit, OnInit {
	loginAs	: 'Admin' | 'Kurikulum' | 'Guru' | 'Murid'			= 'Murid'
	role	: 'admin' | 'curriculum' | 'teacher' | 'student'	= 'student'
	to		= ['/murid']
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
	) {
		const [
			slash,
			masuk,
			$role,
		]: any = _router.url.split('/')
		console.log({ slash, masuk, $role })
		this.loginAs	= $role
		this.role		= this.lookupRole($role)
		this.to			= ['/'+lowerFirst($role)]
	}
	ngAfterViewInit() {}
	ngOnInit() {}
	onSubmit(e) {
		console.log('loGn onSubmit', e)
	}
	lookupRole(role: 'admin' | 'kurikulum' | 'guru' | 'murid') {
		switch (role) {
			case 'admin'	: return 'admin'
			case 'kurikulum': return 'curriculum'
			case 'guru'		: return 'teacher'
			case 'murid'	: return 'student'
		}
	}
}
