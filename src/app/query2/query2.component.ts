import { Component, OnInit } from '@angular/core';
import { Query2Service } from '../query2.service';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit {

  query2:any=[];

  constructor(private api:Query2Service) { }

  ngOnInit(): void {
    this.api.getQuery2().subscribe(res=>{
      console.log(res);
      this.query2=res;
      console.log(this.query2);
    })
  }

}
