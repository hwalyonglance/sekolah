import { AnimationStyleMetadata, style } from '@angular/animations';

import { AAnimateCSS } from '../class';

export class FadeInLeftBig extends AAnimateCSS {
	constructor(){
		super(FADE_IN_LEFT_BIG, 'FadeInLeftBig')
	}
}

export const FADE_IN_LEFT_BIG: AnimationStyleMetadata[] = [
	style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)',	offset: 0 }),
	style({ opacity: 1, transform: 'translate3d(0, 0, 0)',			offset: 1 })
]
