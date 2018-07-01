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
 * code, name,
 */

declare var Date: any

const RULES: {[k: string]: ControlProperty} = {
	code: {
		maxlength			: 32,
		minlength			: 1,
		placeholder			: 'Kode',
		required			: true,
		type				: 'text',
	},
	name: {
		maxlength			: 64,
		minlength			: 1,
		placeholder			: 'Nama',
		required			: true,
		type				: 'text',
	},
};

const VALIDATION_MESSAGES = {
	code	: {
		required: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength: `Minimal harus ${RULES.code.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.code.maxlength} karakter.`,
		duplicate: '$$$value tidak tersedia.',
	},
	name	: {
		required	: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength	: `Minimal harus ${RULES.name.minlength} karakter.`,
		maxlength	: `Tidak boleh lebih dari ${RULES.name.maxlength} karakter.`,
	},
}
function VALIDATORS(api: ApiService, mode: 'Create' | 'Edit') {
	const _Validators = {
		code	: [
			Validators.maxLength(RULES.code.maxlength),
			Validators.minLength(RULES.code.minlength),
		],
		name	: [
			Validators.maxLength(RULES.name.maxlength),
			Validators.minLength(RULES.name.minlength),
		],
	}
	for (let control in RULES) {
		if ( RULES[control].required ) {
			_Validators[control].push(Validators.required)
		}
	}
	return _Validators
}

function CONTROLS_CONFIG(api: ApiService, mode: 'Create' | 'Edit') {
	const _Validators = VALIDATORS(api, mode)
	const CONTROLS = {
		_id	: '',
		code	: ['', _Validators.code],
		name	: ['', _Validators.name],
	}
	if (mode === 'Create') {
		CONTROLS.code[2]	= [validators.unique(api, 'misc', 'code')]
		CONTROLS.name[2]	= [validators.unique(api, 'misc', 'name')]
	}
	return CONTROLS
}

export const SUBJECT_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
