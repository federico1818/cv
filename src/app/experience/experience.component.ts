import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {
    public works: Observable<any[]>
    
    constructor(
        private db: AngularFirestore
    ) {
        this.works = this.db.collection('works').valueChanges()
    }

    ngOnInit() {
    }

}