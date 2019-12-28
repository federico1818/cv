import { Component } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public works: Observable<any[]>

    constructor(
        private db: AngularFirestore
    ) {
        this.works = this.db.collection('works').valueChanges()
    }
}
