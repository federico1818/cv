import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ExperienceComponent } from './../app/experience/experience.component'
import { ExperienceDetailComponent } from './../app/experience-detail/experience-detail.component'
import { ExperienceListComponent } from './../app/experience-list/experience-list.component'
import { EducationComponent } from './../app/education/education.component'
import { SkillsComponent } from './../app/skills/skills.component'
import { HobbiesComponent } from './../app/hobbies/hobbies.component'
import { ProfileComponent } from './../app/profile/profile.component'

const routes: Routes = [
    {
        path: 'experience',
        component: ExperienceComponent,
        data: {
            animation: 'experience'
        },
        children: [
            {
                path: '',
                component: ExperienceListComponent
            },
            {
                path: ':id',
                component: ExperienceDetailComponent
            }
        ]
    },
    {
        path: 'education',
        component: EducationComponent,
        data: {
            animation: 'education'
        }
    },
    {
        path: 'skills',
        component: SkillsComponent,
        data: {
            animation: 'skills'
        }
    },
    {
        path: 'hobbies',
        component: HobbiesComponent,
        data: {
            animation: 'hobbies'
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            animation: 'profile'
        }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
