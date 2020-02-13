import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class BatteryLevelService {
    private level: Subject<number> = new Subject<number>()

    constructor() {
        let navigatorRef: any

        navigatorRef = window.navigator

        navigatorRef.getBattery().then(battery => {
            this.emitValue(battery)
            battery.addEventListener('levelchange', () => {
                this.emitValue(battery)
            })
        })
    }
    
    public getValue(): Observable<number> {
        return this.level
    }
    
    private emitValue(battery: any): void {
        this.level.next(this.getPercentageLevel(battery))
    }

    private getPercentageLevel(battery: any): number {
        return battery.level * 100
    }

}
