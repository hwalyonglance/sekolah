import { AnimationStyleMetadata, style } from '@angular/animations';

export const SLIDE_OUT_RIGHT: AnimationStyleMetadata[] = [
	style({ transform: 'translate3d(0, 0, 0)',							offset: 0 }),
	style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden',	offset: 1 })
]
