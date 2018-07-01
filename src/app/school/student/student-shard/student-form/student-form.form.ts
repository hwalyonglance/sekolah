import {
	Validators,
} from '@angular/forms'

import {
	ApiService,
	FormFieldProperty,
	ControlProperty,
	REQUIRED_CONTROLS,
	validators,
} from '../../../../shard'

/**
 * address, name, NIM, parent,
 * password, password1, birthDate username,
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
		placeholder			: 'NIS',
		required			: true,
		type				: 'number',
	},
	parent: {
		maxlength			: 64,
		minlength			: 1,
		placeholder			: 'Nama Orang Tua',
		required			: true,
		type				: 'text',
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
	birthDate: {
		placeholder			: 'Tanggal Lahir',
		max					: new Date(String((new Date).getFullYear() - 15), '5'),
		required			: true,
		type				: 'mat-datepicker'
	},
	username: {
		maxlength			: 16,
		minlength			: 8,
		placeholder			: 'Username',
		required			: true,
		type				: 'text',
	},
}

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
	NIM: {
		required: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength: `Minimal harus ${RULES.NIM.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.NIM.maxlength} karakter.`,
		duplicate: '$$$value tidak tersedia.',
	},
	parent: {
		required: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength: `Minimal harus ${RULES.parent.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.parent.maxlength} karakter.`,
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
	birthDate: {
		required: `${RULES.birthDate.placeholder} Tidak boleh kosong.`,
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
		parent: [
			Validators.maxLength(RULES.parent.maxlength),
			Validators.minLength(RULES.parent.minlength),
		],
		// password: [
		// 	Validators.maxLength(RULES.password.maxlength),
		// 	Validators.minLength(RULES.password.minlength),
		// 	validators.strongPassword(),
		// ],
		// password1: [
		// 	Validators.maxLength(RULES.password1.maxlength),
		// 	Validators.minLength(RULES.password1.minlength),
		// 	validators.strongPassword(),
		// ],
		birthDate: [
		],
		username: [
			Validators.maxLength(RULES.username.maxlength),
			Validators.minLength(RULES.username.minlength),
		],
	}
	for (const control in RULES) {
		if (mode === 'Edit' && ['password', 'password1'].includes(control)) {
			// console.log(mode, control)
			RULES[control].required = false
			continue
		} else if (mode === 'Create' && ['password', 'password1'].includes(control)) {
			_Validators[control] = [
				Validators.maxLength(RULES[control].maxlength),
				Validators.minLength(RULES[control].minlength),
				// validators.strongPassword(),
			]
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
		parent		: ['', _Validators.parent],
		birthDate	: [new Date('2000'), _Validators.birthDate],
		username	: ['', _Validators.username],
		// ...REQUIRED_CONTROLS,
	}
	if (mode === 'Create') {
		CONTROLS.NIM[2]					= [validators.unique(api, 'members', 'NIM')];
		(<any>CONTROLS).password		= ['', (<any>_Validators).password];
		// (CONTROLS as any).password1	= ['', (_Validators as any).password1];
		CONTROLS.username[2]			= [validators.unique(api, 'members', 'username')];
	}
	return CONTROLS
}
export const STUDENT_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
