import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SchoolLoginComponent } from './school-login.component'

export const ShoolLoginRoutedComponents = [
	SchoolLoginComponent,
]

const routes: Routes = [
	{ path: ':role',	component: SchoolLoginComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '/' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SchoolLoginRoutingModule { }
