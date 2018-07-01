import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {
	AdminPageClassComponent,
	AdminPageClassFormComponent,

	AdminPageClassStudentComponent,

	AdminPageCurriculumComponent,
	AdminPageCurriculumFormComponent,

	AdminPageDepartmentComponent,
	AdminPageDepartmentFormComponent,

	AdminPageEditPasswordComponent,

	AdminPageHomeComponent,
	AdminPageLoginComponent,

	AdminPageStudentComponent,
	AdminPageStudentFormComponent,

	AdminPageSubjectComponent,
	AdminPageSubjectFormComponent,

	AdminPageScoreComponent,
	AdminPageScoreFormComponent,

	AdminPageTeacherComponent,
	AdminPageTeacherFormComponent,

	AdminPageTeacherAssignmentComponent,
	AdminPageTeacherAssignmentFormComponent,
} from './c'

export const AdminRoutedComponents = [
	AdminPageClassComponent,
	AdminPageClassFormComponent,

	AdminPageClassStudentComponent,

	AdminPageCurriculumComponent,
	AdminPageCurriculumFormComponent,

	AdminPageDepartmentComponent,
	AdminPageDepartmentFormComponent,

	AdminPageEditPasswordComponent,

	AdminPageHomeComponent,
	AdminPageLoginComponent,

	AdminPageStudentComponent,
	AdminPageStudentFormComponent,

	AdminPageSubjectComponent,
	AdminPageSubjectFormComponent,

	AdminPageScoreComponent,
	AdminPageScoreFormComponent,

	AdminPageTeacherComponent,
	AdminPageTeacherFormComponent,

	AdminPageTeacherAssignmentComponent,
	AdminPageTeacherAssignmentFormComponent,
]

const routes: Routes = [
	{ path: 'profil',							component: AdminPageHomeComponent,				},
	{ path: 'jurusan',							component: AdminPageDepartmentComponent,		},
	{ path: 'jurusan/buat',						component: AdminPageDepartmentFormComponent,	data: { mode: 'Create' }, },
	{ path: 'jurusan/:department_id/ubah',		component: AdminPageDepartmentFormComponent,	data: { mode: 'Edit' }, },
	// { path: 'kelas',							component: AdminPageClassComponent,				},
	// { path: 'kelas/buat',						component: AdminPageClassFormComponent,			data: { mode: 'Create' }, },
	// { path: 'kelas/:class_id/penugasan/guru/:teacherAssignment_id/nilai',					component: AdminPageScoreComponent,  },
	// { path: 'kelas/:class_id/penugasan/guru/:teacherAssignment_id/nilai/buat',				component: AdminPageScoreFormComponent,  data: { mode: 'Create' }, },
	// { path: 'kelas/:class_id/penugasan/guru/:teacherAssignment_id/nilai/:score_id/ubah',		component: AdminPageScoreFormComponent,  data: { mode: 'Edit' }, },
	// { path: 'kelas/:class_id/murid',			component: AdminPageClassStudentComponent, },
	// { path: 'kelas/:class_id/ubah',				component: AdminPageClassFormComponent,			data: { mode: 'Edit' }, },
	{ path: 'kurikulum',						component: AdminPageCurriculumComponent,		},
	{ path: 'kurikulum/buat',					component: AdminPageCurriculumFormComponent,	data: { mode: 'Create' }, },
	{ path: 'kurikulum/:curriculum_id/ubah',	component: AdminPageCurriculumFormComponent,	data: { mode: 'Edit' }, },

	{ path: 'murid',							component: AdminPageStudentComponent,			},
	{ path: 'murid/buat',						component: AdminPageStudentFormComponent,		data: { mode: 'Create' }, },
	{ path: 'murid/:student_id/ubah',			component: AdminPageStudentFormComponent,		data: { mode: 'Edit' }, },

	{ path: 'mapel',							component: AdminPageSubjectComponent,			},
	{ path: 'mapel/buat',						component: AdminPageSubjectFormComponent,		data: { mode: 'Create' }, },
	{ path: 'mapel/:subject_id/ubah',			component: AdminPageSubjectFormComponent,		data: { mode: 'Edit' }, },

	{ path: 'guru',								component: AdminPageTeacherComponent,			},
	{ path: 'guru/buat',						component: AdminPageTeacherFormComponent,		data: { mode: 'Create' }, },
	{ path: 'guru/:teacher_id/ubah',			component: AdminPageTeacherFormComponent,		data: { mode: 'Edit' }, },

	// { path: 'penugasan/guru',					component: AdminPageTeacherAssignmentComponent,	},
	// { path: 'penugasan/guru/buat',				component: AdminPageTeacherAssignmentFormComponent,	data: { mode: 'Create' }, },
	// { path: 'penugasan/guru/:teacherAssignment_id/ubah',	component: AdminPageTeacherAssignmentFormComponent,	data: { mode: 'Edit' }, },

	{ path: 'ubah/password'						, component: AdminPageEditPasswordComponent,	},

	{ path: 'masuk', component: AdminPageLoginComponent,	},
	{ path: '', pathMatch: 'full', redirectTo: '/admin/profil',	},
	{ path: '**', pathMatch: 'full', redirectTo: '/admin/profil',	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule { }
