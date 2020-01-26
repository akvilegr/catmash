import { Component, OnInit } from '@angular/core';

import { CatsService } from '../cats.service';

import { FirebaseService } from '../firebase.service';

import { Cat } from '../cat';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cats;

  constructor(private catsService: CatsService, private firebaseService: FirebaseService) { }

  ngOnInit() {

    /* this.catsService.getCats().subscribe((data) => {
      console.log('data', data);
      this.cats = data;
      console.log(this.cats);
    }); */

    this.firebaseService.getRankedCats().subscribe(data => {
      console.log("firebase data", data);
      this.cats = data;
    });
  }

}
