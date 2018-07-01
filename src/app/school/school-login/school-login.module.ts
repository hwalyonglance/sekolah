import { NgModule } from '@angular/core'

import { ShardModule } from '../../shard'

import { ShoolLoginRoutedComponents, SchoolLoginRoutingModule } from './school-login-routing.module'

export const SchoolLoginModules = [
	ShardModule,
	SchoolLoginRoutingModule,
]

@NgModule({
	declarations: [
		...ShoolLoginRoutedComponents,
	],
	exports: [
		...SchoolLoginModules,
		...ShoolLoginRoutedComponents,
	],
	entryComponents: [
		...ShoolLoginRoutedComponents,
	],
	imports: [
		...SchoolLoginModules,
	],
})
export class SchoolLoginModule { }
