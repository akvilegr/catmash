import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  contestantsPool = [];
  contestantsPool2 = [];
  contestant1;
  contestant2;
  image1Shadow = false;
  image2Shadow = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCats().subscribe(result => {
      this.contestantsPool = result;
      this.choosePair();
    });
  }

  choosePair() {
    this.contestant1 = this.contestantsPool[Math.floor(Math.random() * this.contestantsPool.length)];
    this.contestantsPool2 = this.contestantsPool.filter(item => item !== this.contestant1);
    this.contestant2 = this.contestantsPool2[Math.floor(Math.random() * this.contestantsPool2.length)];
  }

  vote(contestant) {
    const payload = contestant;
    payload.rating = payload.rating + 1;
    const id: string = payload.id;
    delete payload.id;
    this.firebaseService.updateCat(id, payload);
  }

}
