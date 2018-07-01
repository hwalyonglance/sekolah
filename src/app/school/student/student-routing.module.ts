import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {
	StudentFormComponent,
	StudentLoginFormComponent,
} from './student-shard'

import {
	StudentPageLoginComponent,
	StudentPageHomeComponent,
	StudentPageEditPasswordComponent,
	StudentPageScoreComponent,
} from './c'

export const StudentRoutedComponents = [
	StudentPageHomeComponent,
	StudentPageLoginComponent,
	StudentPageEditPasswordComponent,
	StudentPageScoreComponent,
]

const routes: Routes = [
	{ path: 'profil'		, component: StudentPageHomeComponent,			},
	// { path: 'bergabung'		, component: StudentFormComponent, data: { mode: 'Create' } },
	// { path: 'masuk'			, component: StudentPageLoginComponent },
	{ path: 'lihat/nilai'	, component: StudentPageScoreComponent,			},
	{ path: 'ubah/password'	, component: StudentPageEditPasswordComponent,	},
	// { path: ':id'		, component: StudentRegisterComponent },
	// { path: ':_id/ubah'		, component: StudentFormComponent, data: { mode: 'Edit' } },
	{ path: ''				, pathMatch: 'full', redirectTo: '/murid/profil' },
	{ path: '**'			, pathMatch: 'full', redirectTo: '/murid/profil' },
]

@NgModule({
	exports: [
		RouterModule,
	],
	imports: [RouterModule.forChild(routes)],
})
export class StudentRoutingModule {}
