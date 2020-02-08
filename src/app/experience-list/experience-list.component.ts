import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Work } from '../models/work'

@Component({
    selector: 'app-experience-list',
    templateUrl: './experience-list.component.html',
    styleUrls: ['./experience-list.component.scss']
})

export class ExperienceListComponent implements OnInit {
    public loading: boolean
    public works: Observable<Work[]>
    
    constructor(
        private db: AngularFirestore
    ) {}
    
    ngOnInit() {
        this.loading = true
        this.works = this.db.collection('experience').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return Object.assign(new Work, {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data() as any
                })
            }))
        );
        this.works.subscribe(() => this.loading = false)
    }

}
