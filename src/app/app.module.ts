import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './Home/home/home.component';
import { ListComponent } from './List/list/list.component';
import { DetailsComponent } from './Details/details/details.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './Carousel/carousel/carousel.component';
import { ProtectDetailsGuard } from './Guards/DetailsGuard/protect-details.guard';
import { LoginComponent } from './Authentication/Login/login/login.component';
import { RegisterComponent } from './Authentication/Register/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyaccountComponent } from './MyAccount/myaccount/myaccount.component'
import { MyaccountGuard } from './Guards/MyAccount/myaccount.guard';
import { LoanedComponent } from './Loaned/loaned/loaned.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    DetailsComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent,
    MyaccountComponent,
    LoanedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'carousel', component: CarouselComponent},
      {path: 'list', component: ListComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'myaccount', component: MyaccountComponent, canActivate: [MyaccountGuard]},
      {path: 'details/:id', component: DetailsComponent, canActivate: [ProtectDetailsGuard]},
      {path: 'loaned', component: LoanedComponent},
      {path: '', redirectTo: 'carousel', pathMatch: 'full'},
      {path: '**', redirectTo: 'carousel', pathMatch: 'full'}
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
