import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {
	TeacherFormComponent,
	TeacherLoginFormComponent,
} from './teacher-shard'

import {
	TeacherPageClassComponent,
	TeacherPageClassStudentComponent,
	TeacherPageEditPasswordComponent,
	TeacherPageLoginComponent,
	TeacherPageHomeComponent,
	TeacherPageHomeroomClassComponent,
	TeacherPageHomeroomClassScoreComponent,
	TeacherPageHomeroomClassStudentComponent,
	TeacherPageHomeroomClassStudentScoreComponent,
	TeacherPageScoreComponent,
	TeacherPageScoreFormComponent,
	TeacherPageTeacherAssignmentComponent,
} from './c'

export const TeacherRoutedComponents = [
	TeacherPageClassComponent,
	TeacherPageClassStudentComponent,
	TeacherPageEditPasswordComponent,
	TeacherPageLoginComponent,
	TeacherPageHomeComponent,
	TeacherPageHomeroomClassComponent,
	TeacherPageHomeroomClassScoreComponent,
	TeacherPageHomeroomClassStudentComponent,
	TeacherPageHomeroomClassStudentScoreComponent,
	TeacherPageScoreComponent,
	TeacherPageScoreFormComponent,
	TeacherPageTeacherAssignmentComponent,
]

const routes: Routes = [
	{ path: 'profil'												, component: TeacherPageHomeComponent, },
	{ path: 'kelas'													, component: TeacherPageClassComponent,	},
	{ path: 'kelas/:class_id/murid'									, component: TeacherPageClassStudentComponent, },
	{ path: 'penugasan'												, component: TeacherPageTeacherAssignmentComponent,	},
	{ path: 'penugasan/:teacherAssignment_id/nilai'					, component: TeacherPageScoreComponent, },
	{ path: 'penugasan/:teacherAssignment_id/nilai/buat'			, component: TeacherPageScoreFormComponent, data: { mode: 'Create' }, },
	{ path: 'penugasan/:teacherAssignment_id/nilai/:score_id/ubah'	, component: TeacherPageScoreFormComponent, data: { mode: 'Edit' }, },
	{ path: 'wali_kelas'											, component: TeacherPageHomeroomClassComponent,	},
	{ path: 'wali_kelas/:class_id/murid'							, component: TeacherPageHomeroomClassStudentComponent, },
	{ path: 'wali_kelas/:class_id/murid/:student_id/nilai'			, component: TeacherPageHomeroomClassStudentScoreComponent, },
	{ path: 'wali_kelas/:class_id/nilai'							, component: TeacherPageHomeroomClassScoreComponent, },
	{ path: 'ubah/password'											, component: TeacherPageEditPasswordComponent,	},
	{ path: ''														, pathMatch: 'full', redirectTo: '/guru/profil' },
	{ path: '**'													, pathMatch: 'full', redirectTo: '/guru/profil' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TeacherRoutingModule { }
