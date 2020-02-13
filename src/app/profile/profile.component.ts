import { Component, OnInit } from '@angular/core'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    public profile: Observable<any>
    public contacts: Observable<any[]>
    private profileRef: AngularFirestoreDocument

    constructor(
        private db: AngularFirestore
    ) {}

    ngOnInit() {
        this.profileRef = this.db.doc('profile/1')
        this.getProfile()
        this.getContacts()
    }
    
    private getProfile(): void {
        this.profile = this.profileRef.valueChanges()
    }

    private getContacts(): void {
        this.contacts = this.profileRef.collection('contacts', ref => ref.orderBy('order') ).valueChanges()
    }

}
