import { NgModule } from '@angular/core'

import { ShardModule } from '../shard'
import { ShoolRoutedComponents, SchoolRoutingModule } from './school-routing.module'

export const SchoolModules = [
	ShardModule,
	SchoolRoutingModule,
]

@NgModule({
	declarations: [
		...ShoolRoutedComponents,
	],
	entryComponents: [
		...ShoolRoutedComponents,
	],
	exports: [
		...ShoolRoutedComponents,
	],
	imports: [
		...SchoolModules,
	],
})
export class SchoolModule { }
