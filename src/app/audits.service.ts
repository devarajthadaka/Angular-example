import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {

  constructor(private http:HttpClient) { }

  getAudits(){
    return this.http.get('https://letstalk-be.herokuapp.com/public/audits/0/10');
  }
}
