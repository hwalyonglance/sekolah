import { NgModule } from '@angular/core';

import { ShardModule } from '../../../shard'

import {
	ScoreFormComponent,
	ScoreTableComponent,
} from './c'

export const ScoreShardComponents = [
	ScoreFormComponent,
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
