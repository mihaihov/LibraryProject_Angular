import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './Home/home/home.component';
import { ListComponent } from './List/list/list.component';
import { DetailsComponent } from './Details/details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
