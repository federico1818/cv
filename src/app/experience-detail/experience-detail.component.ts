import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Work } from '../models/work'
import { Technology } from '../models/technology'

@Component({
    selector: 'app-experience-detail',
    templateUrl: './experience-detail.component.html',
    styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {
    public work: Observable<Work>
    public projects: Observable<any[]>
    public technologies: Observable<any[]>

    private workRef: AngularFirestoreDocument<Work>

    constructor(
        private route: ActivatedRoute,
        private db: AngularFirestore
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id')
        this.workRef = this.db.collection(`experience`).doc<Work>(id)

        this.getWork()
        this.getProjects()
        this.getTechnologies()
    }

    private getWork(): void {
        this.work = this.workRef.snapshotChanges().pipe(
            map(w => {
                return Object.assign(new Work, {
                    id: w.payload.id,
                    ...w.payload.data()
                })
            })
        )
    }

    private getProjects(): void {
        this.projects = this.workRef.collection(`projects`).valueChanges()
    }

    private getTechnologies(): void {
        this.technologies = this.workRef.collection('technologies').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return Object.assign(new Technology, {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data() as any
                })
            }))
        )
    }

}
