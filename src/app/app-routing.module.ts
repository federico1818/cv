import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WorksComponent } from './../app/works/works.component'
import { StudiesComponent } from './../app/studies/studies.component'

const routes: Routes = [
    {
        path: 'works',
        component: WorksComponent
    },
    {
        path: 'studies',
        component: StudiesComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
