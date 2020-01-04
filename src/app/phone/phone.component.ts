import { Component, OnInit } from '@angular/core'
import { RouterOutlet, Router, NavigationStart } from '@angular/router'
import { animations } from './../app-routing-animation'
import { filter } from 'rxjs/operators'

@Component({
    selector: 'app-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.scss'],
    animations: [ animations ]
})

export class PhoneComponent implements OnInit {
    public url: string

    constructor(
        private router: Router
    ) {}

    ngOnInit() {
        this.router
            .events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe((event: NavigationStart) => {
                this.url = event.url
            })
    }

    public prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    public isHome() {
        return this.url == '/'
    }

}
