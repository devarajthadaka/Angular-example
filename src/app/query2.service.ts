import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Query2Service {

  constructor(private http:HttpClient) { }

  getQuery2(){
    return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=e4384a323509409baa9aaa84735fa33b');
  }
}
