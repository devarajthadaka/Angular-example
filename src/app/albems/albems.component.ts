import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albems',
  templateUrl: './albems.component.html',
  styleUrls: ['./albems.component.css']
})
export class AlbemsComponent implements OnInit {

  albums:any=[];

  constructor(private api:AlbumsService) { }

  ngOnInit(): void {
    this.api.getAlbums().subscribe(res=>{
      console.log(res);
      this.albums=res;
      console.log(this.albums);
    })
  }

}
