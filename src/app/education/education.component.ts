import { Component, OnInit } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
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
    public loading: boolean
    
    private studiesRef: AngularFirestoreCollection

    constructor(
        private db: AngularFirestore
    ) {}
    
    ngOnInit() {
        this.loading = true
        this.getStudies()
    }
    
    private getStudies(): void {
        this.studiesRef = this.db.collection('education', ref => ref.orderBy('date_start', 'desc')) 
        this.studies = this.studiesRef.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return Object.assign(new Study, {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data() as any
                })
            }))
        )
        this.studies.subscribe(() => this.loading = false)
    }

}