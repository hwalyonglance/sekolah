import { NgModule } from '@angular/core'

import {
	SubjectFormComponent,
	SubjectTableComponent,
} from './c'

import { ShardModule } from '../../../shard'

export const SubjectShardComponents = [
	SubjectFormComponent,
	SubjectTableComponent,
]

export const SubjectShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...SubjectShardComponents,
	],
	exports: [
		...SubjectShardModules,
		...SubjectShardComponents,
	],
	entryComponents: [
		...SubjectShardComponents,
	],
	imports: [
		...SubjectShardModules,
	],
})
export class SubjectShardModule { }
