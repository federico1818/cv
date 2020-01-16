import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

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
        this.works = this.db.collection('experience').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data() as any
                }
            }))
          );
    }

    ngOnInit() {
    }

}
