import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { MaterialModule } from './material/material.module'

import { PhoneComponent } from './phone/phone.component'
import { NotificationBarComponent } from './notification-bar/notification-bar.component'
import { DockComponent } from './dock/dock.component';
import { WorksComponent } from './works/works.component';
import { StudiesComponent } from './studies/studies.component'

@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
        NotificationBarComponent,
        DockComponent,
        WorksComponent,
        StudiesComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
