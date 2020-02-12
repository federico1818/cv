import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Study } from '../models/study'

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})

export class EducationComponent implements OnInit {
    public studies: Observable<Study[]>

    constructor(
        private db: AngularFirestore
    ) {}
    
    ngOnInit() {
        this.getStudies()
    }
    
    private getStudies(): void {
        this.studies = this.db.collection('education').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return Object.assign(new Study, {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data() as any
                })
            }))
        )
    }

}