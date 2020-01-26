import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
   }

   getRankedCats() {
     return this.firestore.collection('cats', ref => ref.orderBy('ranking', 'desc')).valueChanges();
   }

   createRankedCat(rankedCat: Cat) {
     return this.firestore.collection('cats').add(rankedCat);
   }

   updateRankedCat(rankedCat: Cat) {
    delete rankedCat.id;
    this.firestore.doc('cats/' + rankedCat.id).update(rankedCat);
   }
}
