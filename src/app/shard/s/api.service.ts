import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'

import {
	Observable,
} from 'rxjs'
import {
	tap
} from 'rxjs/operators'

import { environment } from '../environment'

import { dateToString, ISOStringToString } from '../f'

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private _url = environment.app.url + '/__/api'
	private _objectToFormData(object) {
		const formData = new FormData
		for (let  key in object) {
			if (['password0', 'password1'].includes(key)) {
				continue
			}
			let data = object[key]
			if (key.endsWith('Date')) {
				data = dateToString(new Date(data))
			}
			formData.append(key, data)
		}
		return formData
	}
	caches = {}
	constructor(
		private http: HttpClient
	) {
	}
	check(table: string, key: string, value: string) {
		return this.http.get(`${this._url}/check/${table}/${key}/${value}`)
	}
	authentication(role: string, username: string, password: string) {
		const formData = new FormData
		formData.append('role', role)
		formData.append('username', username)
		formData.append('password', password)
		return this.http.post(`${this._url}/authentication`, formData)
	}
	deleteBy(table: string, key: string, value: string) {
		const formData = new FormData
		formData.append('key', key)
		formData.append('value', value)
		return this.http.post(`${this._url}/delete_by/${table}`, formData)
	}
	deleteWhere(table: string, conditions: {[key: string]: any}) {
		const formData = this._objectToFormData(conditions)
		return this.http.post(`${this._url}/delete_where/${table}`, formData)
	}
	get(table: string, force: boolean = false) {
		if (force) {
			return new Observable((observer) => {
				observer.next(this.caches[table])
				observer.complete()
			})
		}
		return this.http.get(`${this._url}/get/${table}`)
			.pipe(
				tap(r => this.caches[table] = r),
			)
	}
	getBy(table: string, key: string, value: string) {
		return this.http.get(`${this._url}/get_by/${table}/${key}/${value}`)
	}
	getByQuery(table: string, conditions: {[key: string]: any}) {
		const params = new HttpParams({
			fromObject: conditions
		})
		return this.http.get(`${this._url}/get/${table}`, { params })
	}
	update(table: string, doc: {[key: string]: any}) {
		const formData = this._objectToFormData(doc)
		return this.http.post(`${this._url}/${table}`, formData)
	}
	updateBy(table: string, key: string, value: string, obj: any) {
		delete obj[key]
		const formData = this._objectToFormData(obj)
		return this.http.post(`${this._url}/update_by/${table}/${key}/${value}`, formData)
	}
	updateByQuery<T = any>(table: string, where: {[key: string]: any}, set: T) {
		const object = {
			where	: JSON.stringify(where),
			set		: JSON.stringify(set),
		}
		const formData	= this._objectToFormData(object)
		return this.http.post(`${this._url}/update_by_query/${table}`, formData)
	}
	insert<T = any>(table: string, obj: T) {
		const formData = this._objectToFormData(obj)
		return this.http.post(`${this._url}/insert/${table}`, formData)
	}
}
