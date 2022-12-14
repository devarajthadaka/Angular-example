import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http:HttpClient) { }

  getBlogs(){
    return this.http.get('https://letstalk-be.herokuapp.com/public/blogs');
  }
}
