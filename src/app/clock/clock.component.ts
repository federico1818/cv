import { Component, OnInit } from '@angular/core'
import { Observable, timer } from 'rxjs'
import { map, share } from 'rxjs/operators'


@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.scss']
})

export class ClockComponent implements OnInit {
    public clock: Observable<Date>

    constructor() { }

    ngOnInit() {
        this.clock = timer(0, 1000).pipe(
            map(time => new Date),
            share()
        )
    }

}