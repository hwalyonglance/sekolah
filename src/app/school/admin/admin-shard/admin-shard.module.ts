import { NgModule } from '@angular/core'

import { ShardModule } from '../../../shard'
import {
	AdminDashboardComponent,
	AdminLoginFormComponent,
	AdminProfileComponent,
} from './c'

export const AdminShardComponents = [
	AdminDashboardComponent,
	AdminLoginFormComponent,
	AdminProfileComponent,
]

export const AdminShardModules = [
	ShardModule,
]

@NgModule({
	declarations: [
		...AdminShardComponents,
	],
	entryComponents: [
		...AdminShardComponents,
	],
	exports: [
		...AdminShardComponents,
	],
	imports: [
		...AdminShardModules,
	],
})
export class AdminShardModule { }
