import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  constructor(private http:HttpClient) { }

getMenuitem(){
  return this.http.get('https://api.spoonacular.com/food/menuItems/search?apiKey=12aeef2325da417fa8c43e0208b53dfe&query=burger');
}
}
