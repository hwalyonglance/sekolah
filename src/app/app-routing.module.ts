import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XComponent } from './x.component'

const routes: Routes = [
	{ path: '', loadChildren: './school/school.module#SchoolModule' },
	// { path: '', component: XComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
