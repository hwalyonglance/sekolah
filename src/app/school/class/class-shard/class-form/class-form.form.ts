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

declare var Date: any

const RULES: {[k: string]: ControlProperty} = {
	classCode				: {
		maxlength		: 32,
		minlength		: 1,
		placeholder		: 'Kode',
		required		: true,
		type			: 'text',
	},
	className				: {
		maxlength		: 64,
		minlength		: 1,
		placeholder		: 'Nama',
		required		: true,
		type			: 'text',
	},
	classDepartment_id		: {
		placeholder		: 'Jurusan',
		required		: true,
		type			: 'mat-select',
	},
	classHomeroomTeacher_id	: {
		placeholder		: 'Wali Kelas',
		required		: true,
		type			: 'mat-select',
	},
};

const VALIDATION_MESSAGES = {
	classCode:{
		required		: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength		: `Minimal harus ${RULES.classCode.minlength} karakter.`,
		maxlength		: `Tidak boleh lebih dari ${RULES.classCode.maxlength} karakter.`,
		duplicate		: '$$$value tidak tersedia.',
	},
	className: {
		required		: `Tidak boleh kosong.`,
		// minlength: `minlength $$$requiredLength , actual $$$actualLength `,
		minlength: `Minimal harus ${RULES.className.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.className.maxlength} karakter.`,
	},
	classDepartment_id		: {
		required: `Tidak boleh kosong.`,
	},
	classHomeroomTeacher_id	: {
		required: `Tidak boleh kosong.`,
	},
}
function VALIDATORS(api: ApiService, mode: 'Create' | 'Edit') {
	const _Validators = {
		classCode				: [
			Validators.maxLength(RULES.classCode.maxlength),
			Validators.minLength(RULES.classCode.minlength),
		],
		className				: [
			Validators.maxLength(RULES.className.maxlength),
			Validators.minLength(RULES.className.minlength),
		],
		classDepartment_id		: [
		],
		classHomeroomTeacher_id	: [
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
		class_id					: '',
		classCode				: ['', _Validators.classCode],
		className				: ['', _Validators.className],
		classDepartment_id		: ['', _Validators.classDepartment_id],
		classHomeroomTeacher_id	: ['', _Validators.classHomeroomTeacher_id],
		// ...REQUIRED_CONTROLS,
	}
	if (mode === 'Create') {
		CONTROLS.classCode[2]	= [validators.unique(api, 'classes', 'classCode')]
	}
	return CONTROLS
}

export const CLASS_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
