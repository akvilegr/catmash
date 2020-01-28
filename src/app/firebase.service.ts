import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
   }

   getCats() {
     return this.firestore.collection('cats', ref => ref.orderBy('rating', 'desc')).snapshotChanges()
     .pipe(
      map(actions => actions.map(a => ({ ...a.payload.doc.data(), id: a.payload.doc.id })))
    );
   }

   updateCat(id: string, payload: object) {
    this.firestore.doc('cats/' + id).update(payload);
   }
}
