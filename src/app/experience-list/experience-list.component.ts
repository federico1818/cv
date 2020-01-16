import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-experience-list',
    templateUrl: './experience-list.component.html',
    styleUrls: ['./experience-list.component.scss']
})

export class ExperienceListComponent implements OnInit {

    public works: Observable<any[]>
    
    constructor(
        private db: AngularFirestore
    ) {
        this.works = this.db.collection('experience').valueChanges()
    }

    ngOnInit() {
    }

}
