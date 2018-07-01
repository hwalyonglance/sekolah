import {
	FloatLabelType,
	MatFormFieldAppearance,
	MatHint,
	ThemePalette
} from '@angular/material'

export interface FormFieldProperty {
	appearance: MatFormFieldAppearance
	color: ThemePalette
	floatLabel: FloatLabelType
	hideRequiredMarker: boolean
	hintLabel: MatHint
}

export interface ControlProperty {
	cols				?: number
	dir					?: boolean
	disabled			?: boolean
	id					?: string
	matAutosizeMaxRows	?: number
	matAutosizeMinRows	?: number
	max					?: number
	maxLength			?: number
	maxlength			?: number
	min					?: number
	minLength			?: number
	minlength			?: number
	name				?: string
	pattern				?: string
	placeholder			?: string
	readOnly			?: boolean
	required			?: boolean
	rows				?: number
	spellcheck			?: boolean
	type				?: string
	value				?: string
	validity			?: ValidityState
	wrap				?: string
}
