import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule
    ]
})

export class MaterialModule { }
