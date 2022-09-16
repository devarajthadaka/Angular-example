import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:any=[];

  constructor(private api:PhotosService) { }

  ngOnInit(): void {
    this.api.getPhotos().subscribe(res=>{
      console.log(res);
      this.photos=res;
      console.log(this.photos);
    })
  }

}
