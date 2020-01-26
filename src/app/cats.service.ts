import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  API_URL = 'https://latelier.co/data/cats.json';

  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200/'
    })
  };
  constructor(private http: HttpClient) {

  }

  public getCats() {
    return this.http.get(this.API_URL, this.optionRequete);
  }
}
