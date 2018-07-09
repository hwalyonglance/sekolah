import { NgModule } from '@angular/core';

import { ShardModule } from '../../../shard'

import {
	ScoreFormComponent,
	ScoreFormMultipleComponent,
	ScoreTableComponent,
} from './c'

export const ScoreShardComponents = [
	ScoreFormComponent,
	ScoreFormMultipleComponent,
	ScoreTableComponent,
]

export const ScoreShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...ScoreShardComponents,
	],
	entryComponents: [
		...ScoreShardComponents,
	],
	exports: [
		...ScoreShardModules,
		...ScoreShardComponents,
	],
	imports: [
		...ScoreShardModules,
	],
})
export class ScoreShardModule { }
