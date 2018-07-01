import { NgModule } from '@angular/core'

import { ShardModule } from '../../../shard'

import {
	CurriculumFormComponent,
	CurriculumTableComponent,
	CurriculumDashboardComponent,
	CurriculumLoginFormComponent,
	CurriculumProfileComponent,
} from './c'

export const CurriculumShardComponents = [
	CurriculumFormComponent,
	CurriculumTableComponent,
	CurriculumDashboardComponent,
	CurriculumLoginFormComponent,
	CurriculumProfileComponent,
]

export const CurriculumShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...CurriculumShardComponents,
	],
	exports: [
		...CurriculumShardModules,
		...CurriculumShardComponents,
	],
	entryComponents: [
		...CurriculumShardComponents,
	],
	imports: [
		...CurriculumShardModules,
	],
})
export class CurriculumShardModule { }
