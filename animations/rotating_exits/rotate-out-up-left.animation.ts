import { AnimationStyleMetadata, style } from '@angular/animations';

export const ROTATE_OUT_UP_LEFT: AnimationStyleMetadata[] = [
	style({ opacity: 1, 'transform-origin': 'left bottom',	offset: 0 }),
	style({
		opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)',
		'transform-origin': 'left bottom',					offset: 1
	})
]
