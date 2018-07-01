import { NgModule } from '@angular/core'

import {
	TeacherFormComponent,
	TeacherTableComponent,
	TeacherDashboardComponent,
	TeacherLoginFormComponent,
	TeacherAssignmentFormComponent,
	TeacherAssignmentTableComponent,
	TeacherProfileComponent,
} from './c'

import { ShardModule } from '../../../shard'

export const TeacherShardComponents = [
	TeacherFormComponent,
	TeacherTableComponent,
	TeacherDashboardComponent,
	TeacherLoginFormComponent,
	TeacherAssignmentFormComponent,
	TeacherAssignmentTableComponent,
	TeacherProfileComponent,
]

export const TeacherShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...TeacherShardComponents,
	],
	exports: [
		...TeacherShardComponents,
	],
	entryComponents: [
		...TeacherShardComponents,
	],
	imports: [
		...TeacherShardModules,
	],
})
export class TeacherShardModule { }
