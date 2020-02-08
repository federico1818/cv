import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Work } from '../models/work'

@Component({
    selector: 'app-experience-detail',
    templateUrl: './experience-detail.component.html',
    styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {
    public work: Observable<Work>
    public projects: Observable<any[]>
    public technologies: Observable<any[]>

    constructor(
        private route: ActivatedRoute,
        private db: AngularFirestore
    ) {
        const id = this.route.snapshot.paramMap.get('id')
        let workRef = this.db.collection(`experience`).doc<Work>(id)
        
        this.work = workRef.snapshotChanges().pipe(
            map(w => {
                return Object.assign(new Work, {
                    id: w.payload.id,
                    ...w.payload.data()     
                })
            })
        )
        this.projects = workRef.collection(`projects`).valueChanges()
        this.technologies = workRef.collection(`technologies`).valueChanges()
    }

    ngOnInit() {
    }

}
