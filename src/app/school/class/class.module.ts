import { NgModule } from '@angular/core';

import { ShardModule } from '../../shard'
import { ClassShardModule } from './class-shard'
import { ClassRoutedComponents, ClassRoutingModule } from './class-routing.module';

export const ClassModules = [
	ShardModule,
	ClassShardModule,
	ClassRoutingModule,
]

@NgModule({
	declarations: [
		...ClassRoutedComponents,
	],
	entryComponents: [
		...ClassRoutedComponents,
	],
	exports: [
		...ClassModules,
		...ClassRoutedComponents,
	],
	imports: [
		...ClassModules,
	],
})
export class ClassModule { }
