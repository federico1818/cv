import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
    selector: 'app-experience-detail',
    templateUrl: './experience-detail.component.html',
    styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {
    public work
    public projects
    public technologies

    constructor(
        private route: ActivatedRoute,
        private db: AngularFirestore
    ) {
        const id = this.route.snapshot.paramMap.get('id')
        let workRef = this.db.collection(`experience`).doc(id)
        
        this.work = workRef.valueChanges()
        this.projects = workRef.collection(`projects`).valueChanges()
        this.technologies = workRef.collection(`technologies`).valueChanges()
    }

    ngOnInit() {
    }

}
