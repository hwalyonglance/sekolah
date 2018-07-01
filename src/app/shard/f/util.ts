import {
	lowerFirst,
	upperFirst,
} from 'lodash'

import { environment } from '../environment'

export const LOWERCASE_CHARACTER	= `abcdefghijklmnopqrstuvwxyz`
export const NUMBER					= `0123456789`
export const SPECIAL_CHARACTER		= `~!@#$%^&*()_+\`-=[]\\{}|;':",./<>?`
export const UPPERCASE_CHARACTER	= `ABCDEFGHIJKLMNOPQRSTUVWXYZ`

export type MemberAlias = 'admin' | 'curriculum' | 'student' | 'teacher'
export type MiscAlias = 'department' | 'subject'

export function addToStorage(key: string, value: string, asBase64: boolean = false) {
	const storage	= getStorage()
	storage[key]	= asBase64 ? toBase64(value) : value
	setStorage(storage)
	return storage
}
export function aliasToMember(role: MemberAlias, object) {
	let copiedtObject = {}
	for (let key in object) {
		let _key = key.replace(role, '')
		if (isUpperFirst(_key) && _key !== 'NIM') {
			_key = lowerFirst(_key)
		}
		copiedtObject[_key] = object[key]
	}
	return copiedtObject as any
}
export function aliasToMisc(role: MiscAlias, object) {
	let copiedtObject = {}
	for (let key in object) {
		let _key = key.replace(role, '')
		if (isUpperFirst(_key)) {
			_key = lowerFirst(_key)
		}
		copiedtObject[_key] = object[key]
	}
	return copiedtObject as any
}
export function base64ToJSON(base64EncodedString: string) {
	try{
		return JSON.parse(fromBase64(base64EncodedString))
	}catch{
		return {}
	}
}
export function coerceBoolean(value: any) {
	const retVal =  JSON.stringify(value) === '{}'
		? false
		: typeof value == 'object' && (JSON.stringify(value) !== '{}')
			? coerceBooleanObject(value)
			: coerceBooleanProperty(value)
	return retVal
}
export function coerceBooleanObject (obj) {
	return JSON.stringify(obj) !== '{}'
}
export function coerceBooleanProperty(value: any) {
	const retVal
		= value === ''
		? false
		: value === 0
			? false
			: Boolean(value)
	return retVal
}
export function countCharacter(str: string, min: number = 1){
	const STR = `${str}`
	const CHARACTER = LOWERCASE_CHARACTER + UPPERCASE_CHARACTER
	let count: number = 0
	STR.split('').forEach((_str) => {
		CHARACTER.split('').forEach((_character) => {
			count += _str === _character ? 1 : 0
		})
	})
	return count
}
export function countLowercaseCharacter(str: string){
	const STR = `${str}`
	let count: number = 0
	STR.split('').forEach((_str) => {
		LOWERCASE_CHARACTER.split('').forEach((_lowercase) => {
			count += _str === _lowercase ? 1 : 0
		})
	})
	return count
}
export function countNumber(str: string) {
	const STR = `${str}`
	let count: number = 0
	STR.split('').forEach((_str) => {
		NUMBER.split('').forEach((_number) => {
			count += _str === _number ? 1 : 0
		})
	})
	return count
}
export function countSpecialChar(str: string) {
	const STR = `${str}`
	let count: number = 0
	STR.split('').forEach((_str) => {
		SPECIAL_CHARACTER.split('').forEach((_symbol) => {
			count += _str === _symbol ? 1 : 0
		})
	})
	return count
}
export function countUppercaseCharacter(str: string) {
	const STR = `${str}`
	let count: number = 0
	STR.split('').forEach((_str) => {
		UPPERCASE_CHARACTER.split('').forEach((_uppercase) => {
			count += _str === _uppercase ? 1 : 0
		})
	})
	return count
}
export function dateToString(date: Date) {
	let y = String(date.getFullYear())
	let M = String(date.getMonth()+1).padStart(2,'0')
	let d = String(date.getDate()).padStart(2,'0')
	let h = String(date.getHours()).padStart(2,'0')
	let m = String(date.getMinutes()).padStart(2,'0')
	let s = String(date.getSeconds()).padStart(2,'0')
	return `${y}-${M}-${d} ${h}:${m}:${s}`
}
export function fromBase64(base64EncodedString: string) {
	return atob(atob(atob(base64EncodedString)))
}
export function getFromStorage(key: string, asRaw: boolean = false) {
	const storage	= getStorage()
	const value		= asRaw ? fromBase64(storage[key]) : storage[key]
	return value
}
export function getStorage() {
	return JSON.parse(base64ToJSON(localStorage.getItem(environment.app.name)))
}
export function JSONBase64ToObject(JSONBase64: string) {
	return JSON.parse(base64ToJSON(JSONBase64)) || {}
}
export function JSONToBase64(obj: Object) {
	try{
		return toBase64(JSON.stringify(obj))
	}catch{
		return ''
	}
}
export function isLowerFirst(str: string) {
	return LOWERCASE_CHARACTER.slice().split('').includes(str.substr(0, 1))
}
export function isUpperFirst(str: string) {
	return UPPERCASE_CHARACTER.slice().split('').includes(str.substr(0, 1))
}
export function ISOStringToString(ISOString: string) {
	return dateToString(new Date(ISOString))
}
export function maxLength(str: string | number, max: number) {
	return String(str).length <= max
}
export function ObjectToJSONBase64(object) {
	return JSONToBase64(JSON.stringify(object))
}
export function toAlias(alias: MemberAlias | MiscAlias, object) {
	const copiedObject = {}
	for (let key in object) {
		const _key = alias + upperFirst(key)
		copiedObject[_key] = object[key]
	}
	return copiedObject
}
export function minLength(str: string | number, min: number) {
	return String(str).length >= min
}
export function pluralToSingular(str: string) {
	const length = str.length
	let strs = str.split('')
	strs.pop()
	if (strs[strs.length-1] === 'e') {
		strs.pop()
	}
	return strs.join('')
}
export function removeFromStorage(key: string) {
	const storage	= getStorage()
	delete storage[key]
	setStorage(storage)
	return storage
}
export function setStorage(object) {
	localStorage.setItem(environment.app.name, JSONToBase64(JSON.stringify(object)))
	return getStorage()
}
export function singularToPlural(str: string) {
	return str + (str.endsWith('s') ? 'es' : 's')
}
export function strongPassword(str: string) {
	const STR = `${str}`
	const lemah: any = {
		length		: STR.length,
		lowercase	: countLowercaseCharacter(STR),
		number		: countNumber(STR),
		specialChar	: countSpecialChar(STR),
		uppercase	: countUppercaseCharacter(STR),
	}
	for (let i in lemah) {
		if (lemah[i] > 1) {
			delete lemah[i]
		}
	}
	return JSON.stringify(lemah) == '{}' ? null : { lemah }
}
export function toBase64(rawString: string) {
	return btoa(btoa(btoa(rawString)))
}
