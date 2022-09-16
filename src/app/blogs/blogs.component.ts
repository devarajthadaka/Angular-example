import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:any=[];

  constructor(private api:BlogsService) { }

  ngOnInit(): void {
    this.api.getBlogs().subscribe(res=>{
      console.log(res);
      this.blogs=res;
      console.log(this.blogs);
    })
  }

}
