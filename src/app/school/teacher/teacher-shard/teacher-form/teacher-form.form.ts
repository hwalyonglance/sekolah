import {
	Validators,
} from '@angular/forms';

import {
	ApiService,
	FormFieldProperty,
	ControlProperty,
	REQUIRED_CONTROLS,
	validators,
} from '../../../../shard'

/**
 * address, name, NIM, password,
 * password1, telp, username,
 */

declare var Date: any

const RULES: {[k: string]: ControlProperty} = {
	address: {
		matAutosizeMaxRows	: 8,
		matAutosizeMinRows	: 1,
		maxlength			: 256,
		minlength			: 8,
		placeholder			: 'Alamat',
		required			: true,
		type				: 'textarea',
	},
	name: {
		maxlength			: 64,
		minlength			: 1,
		placeholder			: 'Nama',
		required			: true,
		type				: 'text',
	},
	NIM: {
		maxlength			: 12,
		minlength			: 12,
		placeholder			: 'NIP',
		required			: true,
		type				: 'number',
	},
	password: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'Password',
		required			: true,
		type				: 'password',
	},
	// password1: {
	// 	maxlength			: 16,
	// 	minlength			: 8,
	// 	placeholder			: 'Ketik ulang Password',
	// 	required			: true,
	// 	type				: 'password',
	// },
	telp: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'No. Telp.',
		required			: true,
		type				: 'text',
	},
	username: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'Username',
		required			: true,
		type				: 'text',
	},
};

const VALIDATION_MESSAGES = {
	address: {
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.address.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.address.maxlength} karakter.`,
	},
	name: {
		required: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength: `Minimal harus ${RULES.name.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.name.maxlength} karakter.`,
	},
	NIM:{
		required: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength: `Minimal harus ${RULES.NIM.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.NIM.maxlength} karakter.`,
		duplicate: '$$$value tidak tersedia.',
	},
	password: {
		// lemah: `Contoh Password: qwER12#$.`,
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.password.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.password.maxlength} karakter.`,
	},
	// password1: {
	// 	lemah: `Contoh Password: qwER12#$.`,
	// 	required: `Tidak boleh kosong.`,
	// 	minlength: `Minimal harus ${RULES.password1.minlength} karakter.`,
	// 	maxlength: `Tidak boleh lebih dari ${RULES.password1.maxlength} karakter.`,
	// },
	telp: {
		required: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength: `Minimal harus ${RULES.telp.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.telp.maxlength} karakter.`,
	},
	username: {
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.username.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.username.maxlength} karakter.`,
		duplicate: '$$$value tidak tersedia.',
	},
}
function VALIDATORS(api: ApiService, mode: 'Create' | 'Edit') {
	const _Validators = {
		address: [
			Validators.maxLength(RULES.address.maxlength),
			Validators.minLength(RULES.address.minlength),
		],
		name: [
			Validators.maxLength(RULES.name.maxlength),
			Validators.minLength(RULES.name.minlength),
		],
		NIM: [
			Validators.maxLength(RULES.NIM.maxlength),
			Validators.minLength(RULES.NIM.minlength),
		],
		password: [
			Validators.maxLength(RULES.password.maxlength),
			Validators.minLength(RULES.password.minlength),
			// validators.match('password', 'password1'),
			// validators.strongPassword(),
		],
		// password1: [
		// 	Validators.maxLength(RULES.password1.maxlength),
		// 	Validators.minLength(RULES.password1.minlength),
		// 	// validators.match('password', 'password1'),
		// 	validators.strongPassword(),
		// ],
		telp: [
			Validators.maxLength(RULES.telp.maxlength),
			Validators.minLength(RULES.telp.minlength),
		],
		username: [
			Validators.maxLength(RULES.username.maxlength),
			Validators.minLength(RULES.username.minlength),
		],
	}
	for (let control in RULES) {
		if (mode === 'Edit' && ['password', 'password1'].includes(control)) {
			// console.log(mode, control)
			RULES[control].required = false
			continue
		}
		// console.log('after continue ', control)
		if ( RULES[control].required ) {
			_Validators[control].push(Validators.required)
		}
	}
	return _Validators
}

function CONTROLS_CONFIG(api: ApiService, mode: 'Create' | 'Edit') {
	const _Validators = VALIDATORS(api, mode)
	const CONTROLS = {
		_id			: '',
		address		: ['', _Validators.address],
		name		: ['', _Validators.name],
		NIM			: ['', _Validators.NIM],
		password	: ['', []],
		// password1	: ['', []],
		telp		: ['', _Validators.telp],
		username	: ['', _Validators.username],
		// ...REQUIRED_CONTROLS,
	}
	if (mode === 'Create') {
		CONTROLS.NIM[2]			= [validators.unique(api, 'members', 'NIM')]
		CONTROLS.password[1]	= _Validators.password
		// CONTROLS.password1[1]	= _Validators.password1
		CONTROLS.username[2]	= [validators.unique(api, 'members', 'username')]
	}
	return CONTROLS
}



export const TEACHER_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
