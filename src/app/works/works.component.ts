import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {
    public works: Observable<any[]>

    constructor(
        private db: AngularFirestore
    ) {
        this.works = this.db.collection('works').valueChanges()
    }

    ngOnInit() {
    }

}
