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
import { DockComponent } from './dock/dock.component'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { ClockComponent } from './clock/clock.component'
import { SkillsComponent } from './skills/skills.component'
import { ExperienceComponent } from './experience/experience.component'
import { EducationComponent } from './education/education.component';
import { ProfileComponent } from './profile/profile.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { BatteryComponent } from './battery/battery.component'
import { BatteryLevelService } from './services/battery-level.service';

@NgModule({
    declarations: [
        AppComponent,
        PhoneComponent,
        NotificationBarComponent,
        DockComponent,
        NavigationBarComponent,
        ClockComponent,
        SkillsComponent,
        ExperienceComponent,
        EducationComponent,
        ProfileComponent,
        HobbiesComponent,
        ExperienceDetailComponent,
        ExperienceListComponent,
        BatteryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MaterialModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        BatteryLevelService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
