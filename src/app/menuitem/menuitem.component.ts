import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../menuitem.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  menuItem:any=[];

  constructor(private api:MenuitemService) { }

  ngOnInit(): void {
    this.api.getMenuitem().subscribe(res=>{
      console.log(res);
      this.menuItem=res;
      console.log(this.menuItem);
    })
  }

}
