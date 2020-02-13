import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { BatteryLevelService } from './../services/battery-level.service'

@Component({
    selector: 'app-battery',
    templateUrl: './battery.component.html',
    styleUrls: ['./battery.component.scss']
})

export class BatteryComponent implements OnInit {
    public level: Observable<number>

    constructor(
        private batteryLevelService: BatteryLevelService
    ) {}

    ngOnInit() {
        this.level = this.batteryLevelService.getValue()
    }

}
