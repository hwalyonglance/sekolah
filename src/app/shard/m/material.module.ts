import { NgModule } from '@angular/core';

import {
	// MatAutocompleteModule,
	// MatBadgeModule,
	MatButtonModule,
	// MatButtonToggleModule,
	// MatBottomSheetModule,
	MatCardModule,
	// MatCheckboxModule,
	// MatChipsModule,
	MatCommonModule,
	MatDatepickerModule,
	MatDialogModule,
	// MatDividerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	// MatLineModule,
	MatListModule,
	MatMenuModule,
	NativeDateModule,
	MatNativeDateModule,
	// MatOptionModule,
	MatPaginatorModule,
	// MatPseudoCheckboxModule,
	// MatProgressBarModule,
	MatProgressSpinnerModule,
	// MatRadioModule,
	// MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	// MatSliderModule,
	// MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	// MatStepperModule,
	MatTableModule,
	// MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	// MatTreeModule,

	MAT_DATE_LOCALE,
} from '@angular/material';

export const MaterialModuleMap: any[] = [
	// MatAutocompleteModule,
	// MatBadgeModule,
	// MatBottomSheetModule,
	MatButtonModule,
	// MatButtonToggleModule,
	MatCardModule,
	// MatChipsModule,
	// MatCheckboxModule,
	MatCommonModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	// MatDividerModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	// MatLineModule,
	MatListModule,
	MatMenuModule,
	NativeDateModule,
	MatNativeDateModule,
	// MatOptionModule,
	MatPaginatorModule,
	// MatProgressBarModule,
	MatProgressSpinnerModule,
	// MatPseudoCheckboxModule,
	// MatRadioModule,
	// MatRippleModule,
	// MatSliderModule,
	MatSelectModule,
	MatSidenavModule,
	// MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	// MatStepperModule,
	MatTableModule,
	// MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	// MatTreeModule,
];

import { A11yModule } from '@angular/cdk/a11y';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

export const CdkModuleMap: any[] = [
	A11yModule,
	LayoutModule,
	OverlayModule,
	PortalModule,
];

@NgModule({
	exports: CdkModuleMap,
	imports: CdkModuleMap,
	declarations: []
})
export class CdkModule { }

@NgModule({
	exports: MaterialModuleMap,
	imports: MaterialModuleMap,
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'id-ID' },
	],
	declarations: []
})
export class MaterialModule { }
