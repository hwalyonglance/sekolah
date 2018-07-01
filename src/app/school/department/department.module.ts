import { NgModule } from '@angular/core'

import { ShardModule } from '../../shard'

import { DepartmentShardModule } from './department-shard'
import { DepartmentRoutingModule } from './department-routing.module'

export const DepartmentModules = [
	ShardModule,
	DepartmentRoutingModule,
]

@NgModule({
	exports: [
		...DepartmentModules,
	],
	imports: [
		...DepartmentModules,
	],
})
export class DepartmentModule { }
