import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  queries:any=[];

  constructor(private api:QueryService) { }

  ngOnInit(): void {
    this.api.getQuery().subscribe(res=>{
      console.log(res);
      this.queries=res;
      console.log(this.queries);
    })
  }

}
