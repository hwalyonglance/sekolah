import { NgModule } from '@angular/core';

import { ShardModule } from '../../shard'

import { ScoreShardModule } from '../score'

import { StudentShardModule } from './student-shard'
import { StudentRoutedComponents, StudentRoutingModule } from './student-routing.module';

export const StudentModules = [
	ShardModule,
	StudentShardModule,
	StudentRoutingModule,

	ScoreShardModule,
]

@NgModule({
	declarations: [
		...StudentRoutedComponents,
	],
	entryComponents: [
		...StudentRoutedComponents,
	],
	exports: [
		...StudentModules,
		...StudentRoutedComponents,
	],
	imports: [
		...StudentModules,
	],
})
export class StudentModule {}
