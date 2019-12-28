import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-studies',
    templateUrl: './studies.component.html',
    styleUrls: ['./studies.component.scss']
})

export class StudiesComponent implements OnInit {
    public studies: Observable<any[]>

    constructor(
        private db: AngularFirestore
    ) {
        this.studies = this.db.collection('studies').valueChanges()
    }
    
    ngOnInit() {
    }

}
