import { NgModule } from '@angular/core'

import { ShardModule } from '../../../shard'

import {
	ClassFormComponent,
	ClassTableComponent,
	ClassStudentTableComponent,
} from './c'

export const ClassShardComponents = [
	ClassFormComponent,
	ClassTableComponent,
	ClassStudentTableComponent,
]

export const ClassShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...ClassShardComponents,
	],
	exports: [
		...ClassShardModules,
		...ClassShardComponents,
	],
	entryComponents: [
		...ClassShardComponents,
	],
	imports: [
		...ClassShardModules,
	],
})
export class ClassShardModule { }
