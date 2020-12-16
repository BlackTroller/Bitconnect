import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const KEY = 'ZDYzMWFkYWU5ZmU4NGM2ZWFjNGIyYzg1NjZiOWYwNzY';
const BASE_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=EUR';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private headers;

  constructor(public http: HttpClient) { 
    this.headers = new HttpHeaders({
      'x-ba-key': KEY
    });
   }
    
   getBitcoinPrice(){
     return this.http.get(BASE_URL);
   }
}
