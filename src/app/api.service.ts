import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const KEY = '';
const BASE_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';
const PATH_URL = '';

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
    
}
