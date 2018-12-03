import {
	Directive,
	Input,
	HostListener,
} from '@angular/core'

import {
	EXCEPTIONS,
	NUMBERS,
} from '../co/keycodes'

@Directive({
	selector: '[numeric]'
})
export class NumericDirective {
	constructor() { }
	@HostListener('keydown', ['$event']) onKeydown(evt: KeyboardEvent) {
		// console.log(evt.key, evt.keyCode)
		if (![...NUMBERS, ...EXCEPTIONS].includes(evt.keyCode)) {
			evt.preventDefault()
		}
	}
}
