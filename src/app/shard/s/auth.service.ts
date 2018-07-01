import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
	MatSnackBar,
} from '@angular/material'
import {
	Router,
} from '@angular/router'
import {
	BehaviorSubject,
	Observable,
	of,
} from 'rxjs'

import {
	map,
	retry,
	tap,
} from 'rxjs/operators'

import { environment } from '../environment'

import {
	base64ToJSON,
	coerceBoolean,
	fromBase64,
	JSONToBase64,
	pluralToSingular,
	toBase64,
} from '../f'
import {
	ApiService,
} from './api.service'
import {
	PlatformService,
} from './platform.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _url = environment.app.url + '/__/api'
	private _openSnackBar(msg: string){
		this._snackBar.open(msg)._dismissAfter(4000)
	}
	role = {
		admin		: new BehaviorSubject(null),
		curriculum	: new BehaviorSubject(null),
		student		: new BehaviorSubject(null),
		teacher		: new BehaviorSubject(null),
	}
	member: any
	token: string
	constructor(
		private _api: ApiService,
		private _http: HttpClient,
		private _platform: PlatformService,
		private _router: Router,
		private _snackBar: MatSnackBar,
	) {}
	checkState(role: string) {
		// console.log('checkState', role, 'begin')
		return new Observable<boolean>(observer => {
			if ( this._platform.browser ) {
				// console.log('checkState platform')
				let storageBase64		= localStorage.getItem(environment.app.name)
				console.log('storageBase64', storageBase64)
				let storageObject		= base64ToJSON(storageBase64)
				console.log('storageObject', storageObject)
				const authTokenBase64	= storageObject[`auth_${role}_token`]
				console.log('authTokenBase64', authTokenBase64)
				const authTokenObject		= base64ToJSON(authTokenBase64)
				console.log('authTokenObject', authTokenObject)
				// const authTokenObject	= JSON.parse(authTokenJSON)
				// console.log('authTokenObject', authTokenObject)
				console.log('JSON.stringify(authTokenObject)', JSON.stringify(authTokenObject))
				console.log('Boolean(authTokenObject)', Boolean(authTokenObject))
				// console.log('coerce', authTokenObject, coerceBoolean(authTokenObject))
				if ( JSON.stringify(authTokenObject) !== '{}' && Boolean(authTokenObject) ) {
					// console.log('authTokenObject ', authTokenObject)
					// console.log('role ', this.role[role])
					const {
						username,
						password,
					} = authTokenObject
					this._api.authentication(role, username, password)
						.subscribe(
							(r: any) => {
								if (r.authenticated) {
									this.role[role].next(r.account)
									console.log('checkState', role, 'success', r)
									observer.next(true)
								} else {
									observer.next(false)
									observer.error(true)
								}
							},
							(r) => {
								// console.log('checkState', role, 'error', r)
								observer.next(false)
								observer.error(true)
							},
							() => { observer.complete() }
						)
				} else {
					observer.next(false)
					observer.error(true)
					observer.complete()
				}
			}
		})
	}
	login(role: string, username: string, password: string, opts: any) {
		const {
			authenticated	= 'Authenticated as ',
			wrong			= 'Username/password is wrong.'
		} = opts
		const formData = new FormData
		formData.append('role', role)
		formData.append('username', username)
		formData.append('password', password)
		return new Observable((observer) => {
			this._api.authentication(role, username, password)
				.pipe(
					retry(3),
				)
				.subscribe(
					(r: any) => {
						// console.log('login success', role, r)
						if (r.authenticated) {
							const authTokenJSON		= JSON.stringify(r.account)
							// console.log('r.account object to json', authTokenJSON)
							const authTokenBase64	= toBase64(authTokenJSON)
							// console.log('r.account json to base64', authTokenBase64)
							let storageBase64		= localStorage.getItem(environment.app.name)
							// console.log('get localStorage base64', storageBase64)
							let storageObject		= base64ToJSON(storageBase64)
							// console.log('localStorage base64 to object', storageObject)
							storageObject[`auth_${role}_token`] = authTokenBase64
							// console.log('storageObject', storageObject)
							storageBase64			= JSONToBase64(storageObject)
							// console.log('storageObject to base64', storageBase64)
							localStorage.setItem(environment.app.name, storageBase64)
							// console.log('set localStorage ', storageBase64)
							this.role[role].next(r.account)
							this._router.navigate(opts.to)
							this._openSnackBar(authenticated + r.account.name)
							observer.next(true)
						} else {
							this._openSnackBar(wrong)
						}
						observer.next(r)
					},
					(r) => {
						console.log('login error', r)
						observer.error(r)
					},
					() => {
						observer.complete()
					}
				)
		})
	}
	logout(role: string, navigateTo: string[]) {
		this._snackBar
			.open('Yakin ingin keluar?', 'Ya', {
				duration: 16000
			})
			.onAction().subscribe(() => {
				this.role[role].next(null)
				let storageBase64		= localStorage.getItem(environment.app.name)
				let storageObject		= base64ToJSON(storageBase64)
				delete storageObject[`auth_${role}_token`]
				storageBase64			= JSONToBase64(storageObject)
				localStorage.setItem(environment.app.name, storageBase64)
				this._router.navigate(navigateTo)
			})
	}
}

// function gg(){
// const ls = JSON.parse(atob(atob(atob(localStorage.getItem('Sekolah')))))
// for (const k in ls) {
// console.log(JSON.parse(atob(atob(atob(ls[k])))))
// }
// }
