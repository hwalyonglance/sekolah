import { NgModule } from '@angular/core'

import { ShardModule } from '../../shard'
import { ClassShardModule } from '../class'
import { CurriculumShardModule } from '../curriculum'
import { DepartmentShardModule } from '../department'
import { ScoreShardModule } from '../score'
import { StudentShardModule } from '../student'
import { SubjectShardModule } from '../subject'
import { TeacherShardModule } from '../teacher'
import { AdminShardModule } from './admin-shard'
import { AdminRoutedComponents, AdminRoutingModule } from './admin-routing.module'

export const AdminModules = [
	ShardModule,
	AdminShardModule,

	ClassShardModule,
	CurriculumShardModule,
	DepartmentShardModule,
	ScoreShardModule,
	StudentShardModule,
	SubjectShardModule,
	TeacherShardModule,

	AdminRoutingModule,
]

@NgModule({
	declarations: [
		...AdminRoutedComponents,
	],
	entryComponents: [
		...AdminRoutedComponents,
	],
	exports: [
		...AdminModules,
		...AdminRoutedComponents,
	],
	imports: [
		...AdminModules,
	],
})
export class AdminModule { }
