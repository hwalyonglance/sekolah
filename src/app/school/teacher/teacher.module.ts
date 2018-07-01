import { NgModule } from '@angular/core'

import { ShardModule } from '../../shard'
import { ClassShardModule } from '../class'
import { ScoreShardModule } from '../score'

import { TeacherShardModule } from './teacher-shard'
import { TeacherRoutedComponents, TeacherRoutingModule } from './teacher-routing.module'

export const TeacherModules = [
	ShardModule,
	TeacherShardModule,
	TeacherRoutingModule,

	ClassShardModule,
	ScoreShardModule,
]

@NgModule({
	declarations: [
		...TeacherRoutedComponents,
	],
	exports: [
		...TeacherModules,
		...TeacherRoutedComponents,
	],
	entryComponents: [
		...TeacherRoutedComponents,
	],
	imports: [
		...TeacherModules,
	],
})
export class TeacherModule { }
