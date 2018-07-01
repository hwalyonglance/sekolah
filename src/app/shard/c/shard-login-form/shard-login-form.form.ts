import {
	Validators,
} from '@angular/forms';

import {
	validators
} from '../../f'
import {
	ControlProperty
} from '../../i'

/**
 * username, password
 */

const RULES: {[k: string]: ControlProperty} = {
	password: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'Password',
		type				: 'password',
	},
	username: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'Username',
		type				: 'text',
	},
}

const VALIDATION_MESSAGES = {
	password: {
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.password.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.password.maxlength} karakter.`,
	},
	username: {
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.username.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.username.maxlength} karakter.`,
	},
}

function VALIDATORS() {
	const _Validators = {
		password: [
			Validators.maxLength(RULES.password.maxlength),
			Validators.minLength(RULES.password.minlength),
			Validators.required,
		],
		username: [
			Validators.maxLength(RULES.username.maxlength),
			Validators.minLength(RULES.username.minlength),
			Validators.required,
		],
	}
	return _Validators
}

function CONTROLS_CONFIG() {
	const _Validators = VALIDATORS()
	const CONTROLS = {
		password		: ['', _Validators.password],
		username		: ['', _Validators.username],
	}
	return CONTROLS
}

export const SHARD_LOGIN_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
