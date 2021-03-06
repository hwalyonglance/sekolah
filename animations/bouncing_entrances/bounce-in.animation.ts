import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class BounceIn extends AAnimateCSS {
	constructor(){
		super(BOUNCE_IN, 'BounceIn')
	}
}

export const BOUNCE_IN: AnimationStyleMetadata[] = [
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		opacity: 0 , transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		opacity: 1 , transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8
	}),
	style({
		'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		opacity: 1 , transform: 'scale3d(1, 1, 1)', offset: 1
	})
]
