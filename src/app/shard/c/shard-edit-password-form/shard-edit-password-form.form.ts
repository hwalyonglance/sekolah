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
	username: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'Username',
		type				: 'text',
	},
	password: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'Password',
		type				: 'password',
	},
}

const VALIDATION_MESSAGES = {
	username: {
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.username.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.username.maxlength} karakter.`,
	},
	password: {
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.password.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.password.maxlength} karakter.`,
		// lemah: `contoh Password JK89ui%$`,
	},
}

function VALIDATORS() {
	const _Validators = {
		username: [
			Validators.maxLength(RULES.username.maxlength),
			Validators.minLength(RULES.username.minlength),
			Validators.required,
		],
		password: [
			Validators.maxLength(RULES.password.maxlength),
			Validators.minLength(RULES.password.minlength),
			Validators.required,
			// validators.strongPassword()
		],
	}
	return _Validators
}

function CONTROLS_CONFIG() {
	const _Validators = VALIDATORS()
	const CONTROLS = {
		username		: ['', _Validators.username],
		password		: ['', _Validators.password],
	}
	return CONTROLS
}

export const SHARD_EDIT_PASSWORD_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
