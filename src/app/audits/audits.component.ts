import { Component, OnInit } from '@angular/core';
import { AuditsService } from '../audits.service';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.css']
})
export class AuditsComponent implements OnInit {

  audits:any=[];

  constructor(private api:AuditsService) { }

  ngOnInit(): void {
    this.api.getAudits().subscribe(res=>{
      console.log(res);
      this.audits=res;
      console.log(this.audits);
    })
  }

}
