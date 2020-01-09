import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})

export class EducationComponent implements OnInit {
    public studies: Observable<any[]>

    constructor(
        private db: AngularFirestore
    ) {
        this.studies = this.db.collection('education').valueChanges()
    }

    ngOnInit() {
    }

}