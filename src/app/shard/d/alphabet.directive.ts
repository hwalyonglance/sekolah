import {
	Directive,
	HostListener,
} from '@angular/core'

import {
	EXCEPTIONS,
	CHARACTERS,
} from '../co/keycodes'

@Directive({
	selector: '[alphabet]'
})
export class AlphabetDirective {
	constructor() {}
	@HostListener('keydown', ['$event']) onKeydown(evt: KeyboardEvent) {
		if ( ![...CHARACTERS, ...EXCEPTIONS].includes(evt.keyCode) ) {
			evt.preventDefault()
		}
	}
}
