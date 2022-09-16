import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http:HttpClient) { }

  getQuery(){
    return this.http.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=12aeef2325da417fa8c43e0208b53dfe&query=burger');
  }
}
