import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {
	CurriculumPageClassComponent,
	CurriculumPageClassFormComponent,
	CurriculumPageClassStudentComponent,
	CurriculumPageEditPasswordComponent,
	CurriculumPageDepartmentComponent,
	CurriculumPageDepartmentFormComponent,
	CurriculumPageHomeComponent,
	CurriculumPageLoginComponent,
	CurriculumPageScoreComponent,
	CurriculumPageStudentComponent,
	CurriculumPageStudentFormComponent,
	CurriculumPageSubjectComponent,
	CurriculumPageSubjectFormComponent,
	CurriculumPageTeacherAssignmentComponent,
	CurriculumPageTeacherAssignmentFormComponent,

} from './c'

export const CurriculumRoutedComponents = [
	CurriculumPageClassComponent,
	CurriculumPageClassFormComponent,
	CurriculumPageClassStudentComponent,
	CurriculumPageEditPasswordComponent,
	CurriculumPageDepartmentComponent,
	CurriculumPageDepartmentFormComponent,
	CurriculumPageHomeComponent,
	CurriculumPageLoginComponent,
	CurriculumPageScoreComponent,
	CurriculumPageStudentComponent,
	CurriculumPageStudentFormComponent,
	CurriculumPageSubjectComponent,
	CurriculumPageSubjectFormComponent,
	CurriculumPageTeacherAssignmentComponent,
	CurriculumPageTeacherAssignmentFormComponent,
]

const routes: Routes = [
	{ path: 'profil'						, component: CurriculumPageHomeComponent },

	{ path: 'kelas'							, component: CurriculumPageClassComponent },
	{ path: 'kelas/buat'					, component: CurriculumPageClassFormComponent, data: { mode: 'Create' } },
	{ path: 'kelas/:class_id/ubah'			, component: CurriculumPageClassFormComponent, data: { mode: 'Edit' } },
	{ path: 'kelas/:class_id/murid'			, component: CurriculumPageClassStudentComponent, },

	{ path: 'kelas/:class_id/penugasan/guru/:teacherAssignment_id/nilai'					, component: CurriculumPageScoreComponent, },
	// { path: 'kelas/:class_id/penugasan/guru/:teacherAssignment_id/nilai/buat'				, component: CurriculumPageScoreFormComponent, data: { mode: 'Create' }, },
	// { path: 'kelas/:class_id/penugasan/guru/:teacherAssignment_id/nilai/:score_id/ubah'		, component: CurriculumPageScoreFormComponent, data: { mode: 'Edit' }, },

	{ path: 'jurusan'						, component: CurriculumPageDepartmentComponent },
	{ path: 'jurusan/buat'					, component: CurriculumPageDepartmentFormComponent, data: { mode: 'Create' } },
	{ path: 'jurusan/:department_id/ubah'	, component: CurriculumPageDepartmentFormComponent, data: { mode: 'Edit' } },

	{ path: 'mapel'							, component: CurriculumPageSubjectComponent },
	{ path: 'mapel/buat'					, component: CurriculumPageSubjectFormComponent, data: { mode: 'Create' } },
	{ path: 'mapel/:student_id/ubah'		, component: CurriculumPageSubjectFormComponent, data: { mode: 'Edit' } },

	{ path: 'murid'							, component: CurriculumPageStudentComponent },
	{ path: 'murid/buat'					, component: CurriculumPageStudentFormComponent, data: { mode: 'Create' } },
	{ path: 'murid/:student_id/ubah'		, component: CurriculumPageStudentFormComponent, data: { mode: 'Edit' } },

	{ path: 'penugasan/guru'				, component: CurriculumPageTeacherAssignmentComponent,	},
	{ path: 'penugasan/guru/buat'			, component: CurriculumPageTeacherAssignmentFormComponent,	data: { mode: 'Create' }, },
	{ path: 'penugasan/guru/:teacherAssignment_id/ubah',	component: CurriculumPageTeacherAssignmentFormComponent,	data: { mode: 'Edit' }, },

	{ path: 'ubah/password'					, component: CurriculumPageEditPasswordComponent,	},

	{ path: '', pathMatch: 'full', redirectTo: '/kurikulum/profil' },
	{ path: '**', pathMatch: 'full', redirectTo: '/kurikulum/profil' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CurriculumRoutingModule { }
