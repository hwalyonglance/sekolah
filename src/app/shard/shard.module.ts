import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { CdkModule, /*FirebaseModule,*/ MaterialModule } from './m'

import { AlphabetDirective } from './d/alphabet.directive'
import { NumericDirective } from './d/numeric.directive'

import {
	ShardTableComponent,
	ShardDashboardComponent,
	ShardFormErrorComponent,
	ShardLoginFormComponent,
	ShardDialogDeleteConfirmComponent,
	ShardDialogFilterColumnsComponent,
	ShardEditPasswordFormComponent,
} from './c';

export const ShardModules = [
	CommonModule,
	RouterModule,
	FlexLayoutModule,
	FormsModule,
	ReactiveFormsModule,
	CdkModule,
	MaterialModule,
	HttpClientModule,
	// FirebaseModule,
]

export const ShardComponents = [
	ShardTableComponent,
	ShardDashboardComponent,
	ShardFormErrorComponent,
	ShardLoginFormComponent,
	ShardDialogDeleteConfirmComponent,
	ShardDialogFilterColumnsComponent,
	ShardEditPasswordFormComponent,
]

export const ShardDirectives = [
	AlphabetDirective,
	NumericDirective,
]

@NgModule({
	declarations: [
		...ShardComponents,
		...ShardDirectives,
	],
	entryComponents: [
		...ShardComponents,
	],
	exports: [
		...ShardModules,
		...ShardComponents,
		...ShardDirectives
	],
	imports: ShardModules
})
export class ShardModule {}
