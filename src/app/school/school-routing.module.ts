import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {
	AdminGuard,
	CurriculumGuard,
	TeacherGuard,
	StudentGuard,
} from './m'

import {
	SchoolPageHomeComponent,
} from './c'

export const ShoolRoutedComponents = [
	SchoolPageHomeComponent,
]

const routes: Routes = [
	{ path: 'masuk',		loadChildren: './school-login/school-login.module#SchoolLoginModule', },
	{ path: 'admin',		loadChildren: './admin/admin.module#AdminModule',					canLoad: [AdminGuard], },
	{ path: 'kurikulum',	loadChildren: './curriculum/curriculum.module#CurriculumModule',	canLoad: [CurriculumGuard], },
	{ path: 'guru',			loadChildren: './teacher/teacher.module#TeacherModule',				canLoad: [TeacherGuard], },
	{ path: 'murid',		loadChildren: './student/student.module#StudentModule',				canLoad: [StudentGuard], },

	// { path: ''	, pathMatch: 'full', redirectTo: '/guru' },
	{ path: ''	, component: SchoolPageHomeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '/' },
	// { path: '**', pathMatch: 'full', component: SchoolPageHomeComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SchoolRoutingModule { }
