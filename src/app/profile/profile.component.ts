import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    public profile: Observable<any>
    
    constructor(
        private db: AngularFirestore
    ) {}

    ngOnInit() {
        this.getProfile()
    }
    
    private getProfile(): void {
        this.profile = this.db.doc('profile/1').valueChanges()
    }

}
