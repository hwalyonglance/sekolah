import { NgModule } from '@angular/core'

import { ShardModule } from '../../shard'
import { ClassShardModule } from '../class'
import { DepartmentShardModule } from '../department'
import { ScoreShardModule } from '../score'
import { StudentShardModule } from '../student'
import { SubjectShardModule } from '../subject'
import { TeacherShardModule } from '../teacher'

import { CurriculumShardModule } from './curriculum-shard'
import { CurriculumRoutedComponents, CurriculumRoutingModule } from './curriculum-routing.module'

export const CurriculumModules = [
	ShardModule,
	CurriculumShardModule,
	CurriculumRoutingModule,

	ClassShardModule,
	DepartmentShardModule,
	ScoreShardModule,
	StudentShardModule,
	SubjectShardModule,
	TeacherShardModule,
]

@NgModule({
	declarations: [
		...CurriculumRoutedComponents,
	],
	entryComponents: [
		...CurriculumRoutedComponents,
	],
	exports: [
		...CurriculumModules,
		...CurriculumRoutedComponents,
	],
	imports: [
		...CurriculumModules,
	],
})
export class CurriculumModule { }
