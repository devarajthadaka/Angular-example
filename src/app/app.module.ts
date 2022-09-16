import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UsersComponent } from './users/users.component';
import { AlbemsComponent } from './albems/albems.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { StatesComponent } from './states/states.component';
import { AuditsComponent } from './audits/audits.component';
import { CitiesComponent } from './cities/cities.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CountriesComponent } from './countries/countries.component';
import { QueryComponent } from './query/query.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { Query2Component } from './query2/query2.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbemsComponent,
    CommentsComponent,
    PhotosComponent,
    TodosComponent,
    StatesComponent,
    AuditsComponent,
    CitiesComponent,
    BlogsComponent,
    CountriesComponent,
    QueryComponent,
    MenuitemComponent,
    Query2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
