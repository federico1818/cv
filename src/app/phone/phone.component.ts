import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { animation } from './../app-routing-animation'

@Component({
    selector: 'app-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.scss'],
    //animations: [ animation ]
})

export class PhoneComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData;
    }

}
