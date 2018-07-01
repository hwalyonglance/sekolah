import { NgModule } from '@angular/core'
// import { AngularFirestoreModule } from 'angularfire2/firestore'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
	ShardModule,
} from './shard'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { XComponent } from './x.component'


import { environment } from '../environments/environment'

export const AppModules = [
	BrowserModule.withServerTransition({ appId: environment.app.name }),
	BrowserAnimationsModule,
	// AngularFirestoreModule.enablePersistence(),
	ShardModule,
	AppRoutingModule,
]

export const AppComponents = [
	AppComponent,
	XComponent,
]

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		...AppComponents,
	],
	entryComponents: [
		...AppComponents,
	],
	exports: [
		...AppComponents,
	],
	imports: [...AppModules],
})
export class AppModule {

}
