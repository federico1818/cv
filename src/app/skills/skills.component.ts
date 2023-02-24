import { Component, OnInit } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Skill } from './../models/skill'

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {
    public skills: Observable<Skill[]>
    public loading: boolean

    private skillsRef: AngularFirestoreCollection

    constructor(
        private db: AngularFirestore
    ) {}

    ngOnInit() {
        this.loading = true
        this.getSkills()
            .subscribe(() => {
                this.loading = false
            })
    }

    private getSkills(): Observable<Skill[]> {
        this.skillsRef = this.db.collection('skills')
        return this.skills = this.skillsRef.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                return Object.assign(new Skill, {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data() as any
                })
            }))
        )
    }

}
