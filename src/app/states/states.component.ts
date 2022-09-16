import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

states:any=[];

  constructor(private api:StatesService) { }

  ngOnInit(): void {
    this.api.getStates().subscribe(res=>{
      console.log(res);
      this.states=res;
      console.log(this.states);
    })
  }

}
