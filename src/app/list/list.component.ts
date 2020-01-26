import { Component, OnInit } from '@angular/core';

import { CatsService } from '../cats.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cats;

  constructor(private catsService: CatsService) { }

  ngOnInit() {

    this.catsService.getCats().subscribe((data) => {
      console.log('data', data);
      this.cats = data;
      console.log(this.cats);
    });
  }

}
