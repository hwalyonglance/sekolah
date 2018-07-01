import { NgModule } from '@angular/core';

import {
	DepartmentFormComponent,
	DepartmentTableComponent,
} from './c'

import { ShardModule } from '../../../shard';

export const DepartmentShardComponents = [
	DepartmentFormComponent,
	DepartmentTableComponent,
]

export const DepartmentShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...DepartmentShardComponents,
	],
	exports: [
		...DepartmentShardModules,
		...DepartmentShardComponents,
	],
	entryComponents: [
		...DepartmentShardComponents,
	],
	imports: [
		...DepartmentShardModules,
	],
})
export class DepartmentShardModule { }
