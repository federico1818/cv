import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { environment } from '../environments/environment';
import { PhoneComponent } from './phone/phone.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { DockComponent } from './dock/dock.component'

@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
        NotificationBarComponent,
        DockComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
