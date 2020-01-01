import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ExperienceComponent } from './../app/experience/experience.component'
import { EducationComponent } from './../app/education/education.component'
import { SkillsComponent } from './../app/skills/skills.component'
import { HobbiesComponent } from './../app/hobbies/hobbies.component'
import { ProfileComponent } from './../app/profile/profile.component'

const routes: Routes = [
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'hobbies',
        component: HobbiesComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
