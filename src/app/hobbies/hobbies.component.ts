import { Component, OnInit } from '@angular/core'
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Hobby } from '../models/hobby'
import { map } from 'rxjs/operators'

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss']
})

export class HobbiesComponent implements OnInit {
    public hobbies: Observable<Hobby[]>
    public loading: boolean

    private hobbiesRef: AngularFirestoreCollection

    constructor(
        private db: AngularFirestore
    ) {}

    ngOnInit() {
        this.loading = true
        this.getHobbies()
            .subscribe(() => {
                this.loading = false
            })
    }

    private getHobbies(): Observable<Hobby[]> {
        this.hobbiesRef = this.db.collection('hobbies', ref => ref.orderBy('order', 'asc'))

        return this.hobbies = this.hobbiesRef.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return Object.assign(new Hobby, {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data() as any
                })
            }))
        )
    }

}
