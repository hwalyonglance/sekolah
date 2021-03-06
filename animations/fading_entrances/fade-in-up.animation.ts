import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeInUp extends AAnimateCSS {
	constructor(){
		super(FADE_IN_UP, 'FadeInUp')
	}
}

export const FADE_IN_UP: AnimationStyleMetadata[] = [
	style({ opacity: 0, transform: 'translate3d(0, 100%, 0)',	offset: 0 }),
	style({ opacity: 1, transform: 'translate3d(0, 0, 0)',		offset: 1 })
]
