import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-experience-detail',
    templateUrl: './experience-detail.component.html',
    styleUrls: ['./experience-detail.component.scss']
})

export class ExperienceDetailComponent implements OnInit {
    public work

    constructor(
        private route: ActivatedRoute,
        private db: AngularFirestore
    ) {
        const id = this.route.snapshot.paramMap.get('id')
        this.work = this.db.doc<any>(`experience/${ id }`).valueChanges()
    }

    ngOnInit() {
    }

}
