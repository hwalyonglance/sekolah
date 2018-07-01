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
	teacherAssignmentCode: {
		maxlength			: 32,
		minlength			: 1,
		placeholder			: 'Kode',
		required			: true,
		type				: 'text',
	},
	teacherAssignmentTeacher_id: {
		placeholder			: 'Guru',
		required			: true,
		type				: 'mat-select',
	},
	teacherAssignmentClass_id: {
		placeholder			: 'Kelas',
		required			: true,
		type				: 'mat-select',
	},
	teacherAssignmentSubject_id: {
		placeholder			: 'MaPel',
		required			: true,
		type				: 'mat-select',
	},
	teacherAssignmentHour	: {
		placeholder			: 'Jumlah Jam',
		maxlength			: 2,
		minlength			: 1,
		required			: true,
		type				: 'text',
	},
	teacherAssignmentDay	: {
		placeholder			: 'Hari',
		required			: true,
		type				: 'mat-select',
	},
	teacherAssignmentSemester: {
		placeholder			: 'Semester',
		maxlength			: 2,
		minlength			: 1,
		required			: true,
		type				: 'text',
	},
	teacherAssignmentPeriode: {
		placeholder			: 'Tahun Ajaran',
		maxlength			: 9,
		minlength			: 9,
		required			: true,
		type				: 'text',
	},
	teacherAssignmentStatus	: {
		placeholder			: 'Status',
		required			: true,
		type				: 'mat-select',
	},
};

const VALIDATION_MESSAGES = {
	teacherAssignmentCode		: {
		required: `Tidak boleh kosong.`,
		maxlength: `Tidak boleh lebih dari ${RULES.teacherAssignmentCode.maxlength} karakter`,
		minlength: `Minimal harus ${RULES.teacherAssignmentCode.minlength} karakter`,
	},
	teacherAssignmentTeacher_id	: {
		required: `Tidak boleh kosong.`,
	},
	teacherAssignmentClass_id	:{
		required: `Tidak boleh kosong.`,
	},
	teacherAssignmentSubject_id	: {
		required: `Tidak boleh kosong.`,
	},
	teacherAssignmentHour		: {
		required: `Tidak boleh kosong.`,
	},
	teacherAssignmentDay		: {
		required: `Tidak boleh kosong.`,
	},
	teacherAssignmentSemester	: {
		required: `Tidak boleh kosong.`,
	},
	teacherAssignmentPeriode	: {
		required: `Tidak boleh kosong.`,
		minLength: `contoh: 2018-2019`,
	},
	teacherAssignmentStatus	: {
		required: `Tidak boleh kosong.`,
	},
}
function VALIDATORS(api: ApiService, mode: 'Create' | 'Edit') {
	const _Validators = {
		teacherAssignmentCode		: [
			Validators.maxLength(RULES.teacherAssignmentCode.maxlength),
			Validators.minLength(RULES.teacherAssignmentCode.minlength),
		],
		teacherAssignmentTeacher_id	: [
		],
		teacherAssignmentClass_id	: [
		],
		teacherAssignmentSubject_id	: [
		],
		teacherAssignmentHour		: [
		],
		teacherAssignmentDay		: [
		],
		teacherAssignmentSemester	: [
		],
		teacherAssignmentPeriode	: [
			Validators.minLength(RULES.teacherAssignmentPeriode.minlength),
		],
		teacherAssignmentStatus	: [
			Validators.required,
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
		teacherAssignment_id			: '',
		teacherAssignmentCode			: ['', _Validators.teacherAssignmentCode],
		teacherAssignmentTeacher_id		: ['', _Validators.teacherAssignmentTeacher_id],
		teacherAssignmentClass_id		: ['', _Validators.teacherAssignmentClass_id],
		teacherAssignmentSubject_id		: ['', _Validators.teacherAssignmentSubject_id],
		teacherAssignmentHour			: ['', _Validators.teacherAssignmentHour],
		teacherAssignmentDay			: ['', _Validators.teacherAssignmentDay],
		teacherAssignmentSemester		: ['', _Validators.teacherAssignmentSemester],
		teacherAssignmentPeriode		: ['', _Validators.teacherAssignmentPeriode],
		teacherAssignmentStatus			: ['Aktif', _Validators.teacherAssignmentStatus],
		// ...REQUIRED_CONTROLS,
	}
	if (mode === 'Create') {
		CONTROLS.teacherAssignmentCode[2]		= [validators.unique(api, 'teacher_assignments', 'teacherAssignmentCode')]
	}
	return CONTROLS
}
export const TEACHER_ASSIGNMENT_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
