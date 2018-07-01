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
 * scoreCode,
 */

declare var Date: any

const RULES: {[k: string]: ControlProperty} = {
	scoreCode: {
		maxlength			: 32,
		minlength			: 1,
		placeholder			: 'Kode',
		required			: true,
		type				: 'text',
	},
	scoreTeacherAssignment_id: {
		placeholder			: '',
		required			: true,
		type				: 'hidden',
	},
	scoreStudent_id: {
		placeholder			: 'Murid',
		required			: true,
		type				: 'mat-select',
	},
	scoreTask: {
		maxlength			: 6,
		placeholder			: 'Nilai Tugas',
		type				: 'text',
	},
	scoreUTS: {
		maxlength			: 6,
		placeholder			: 'Nilai scoreUTS',
		type				: 'text',
	},
	scoreUAS: {
		maxlength			: 6,
		placeholder			: 'Nilai scoreUAS',
		type				: 'text',
	},
	scoreFinal: {
		maxlength			: 6,
		placeholder			: 'Nilai Akhir',
		type				: 'text',
	},
	scoreDescription: {
		maxlength			: 32,
		matAutosizeMaxRows	: 4,
		matAutosizeMinRows	: 1,
		placeholder			: 'Deskripsi',
		type				: 'text',
	},
};

const VALIDATION_MESSAGES = {
	scoreCode:{
		required: `Tidak boleh kosong.`,
		minlength: `Minimal harus ${RULES.scoreCode.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.scoreCode.maxlength} karakter.`,
		duplicate: '$$$value tidak tersedia.',
	},
	scoreTeacherAssignment_id:{
		required: `Tidak boleh kosong.`,
	},
	scoreStudent_id:{
		required: `Tidak boleh kosong.`,
	},
	scoreTask:{
		minlength: `Minimal harus ${RULES.scoreTask.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.scoreTask.maxlength} karakter.`,
	},
	scoreUTS:{
		minlength: `Minimal harus ${RULES.scoreUTS.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.scoreUTS.maxlength} karakter.`,
	},
	scoreUAS:{
		minlength: `Minimal harus ${RULES.scoreUAS.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.scoreUAS.maxlength} karakter.`,
	},
	scoreFinal:{
		minlength: `Minimal harus ${RULES.scoreFinal.minlength} karakter.`,
		maxlength: `Tidak boleh lebih dari ${RULES.scoreFinal.maxlength} karakter.`,
	},
	scoreDescription:{
	},
}
function VALIDATORS(api: ApiService, mode: 'Create' | 'Edit') {
	const _Validators = {
		scoreCode: [
			Validators.maxLength(RULES.scoreCode.maxlength),
			Validators.minLength(RULES.scoreCode.minlength),
		],
		scoreTeacherAssignment_id: [
		],
		scoreStudent_id: [
		],
		scoreTask: [
			Validators.maxLength(RULES.scoreTask.maxlength),
			Validators.minLength(RULES.scoreTask.minlength),
		],
		scoreUTS: [
			Validators.maxLength(RULES.scoreUTS.maxlength),
			Validators.minLength(RULES.scoreUTS.minlength),
		],
		scoreUAS: [
			Validators.maxLength(RULES.scoreUAS.maxlength),
			Validators.minLength(RULES.scoreUAS.minlength),
		],
		scoreFinal: [
			Validators.maxLength(RULES.scoreFinal.maxlength),
			Validators.minLength(RULES.scoreFinal.minlength),
		],
		scoreDescription: [
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
		score_id					: '',
		scoreCode					: ['', _Validators.scoreCode],
		scoreTeacherAssignment_id	: ['', _Validators.scoreTeacherAssignment_id],
		scoreStudent_id				: ['', _Validators.scoreStudent_id],
		scoreTask					: [0, _Validators.scoreTask],
		scoreUTS					: [0, _Validators.scoreUTS],
		scoreUAS					: [0, _Validators.scoreUAS],
		scoreFinal					: [0, _Validators.scoreFinal],
		scoreDescription			: ['', _Validators.scoreDescription],
		// ...REQUIRED_CONTROLS,
	}
	if (mode === 'Create') {
		CONTROLS.scoreCode[2]	= [validators.unique(api, 'scores', 'scoreCode')]
	}
	return CONTROLS
}

export const SCORE_FORM = {
	RULES,
	VALIDATION_MESSAGES,
	VALIDATORS,
	CONTROLS_CONFIG,
}
