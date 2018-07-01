import { Validators } from '@angular/forms'

export const REQUIRED_CONTROLS: {[key: string]: any} = {
	_id				: ['', [
		Validators.maxLength(36),
		// Validators.required
	]], desc		: ['', [
		Validators.maxLength(256),
		// Validators.required
	]], note		: ['', [
		Validators.maxLength(256),
		// Validators.required
	]], createdAt	: [new Date, [
		// Validators.required
	]], updatedAt	: [new Date, [
		// Validators.required
	]],
}
