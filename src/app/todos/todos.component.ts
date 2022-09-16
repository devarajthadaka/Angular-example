import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:any=[];
  
  constructor(private api:TodosService) { }

  ngOnInit(): void {
    this.api.getTodos().subscribe(res=>{
      console.log(res);
      this.todos=res;
      console.log(this.todos);
    })
  }

}
