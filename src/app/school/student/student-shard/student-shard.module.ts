import { NgModule } from '@angular/core'

import {
	StudentFormComponent,
	StudentLoginFormComponent,
	StudentTableComponent,
	StudentDashboardComponent,
	StudentProfileComponent,
} from './c'

import { ShardModule } from '../../../shard'

export const StudentShardComponents = [
	StudentFormComponent,
	StudentLoginFormComponent,
	StudentTableComponent,
	StudentDashboardComponent,
	StudentProfileComponent,
]

export const StudentShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...StudentShardComponents,
	],
	exports: [
		...StudentShardModules,
		...StudentShardComponents,
	],
	entryComponents: [
		...StudentShardComponents,
	],
	imports: [
		...StudentShardModules,
	],
})
export class StudentShardModule { }
