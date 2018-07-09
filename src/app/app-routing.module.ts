import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XComponent } from './x.component'
import { XFormArrayComponent } from './x-form-array.component'

const routes: Routes = [
	{ path: '', loadChildren: './school/school.module#SchoolModule' },
	// { path: '', component: XComponent }, // table multi filter
	// { path: '', component: XFormArrayComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
