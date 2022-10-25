import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationManager } from 'src/models/AuthenticationManager';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public isLoggedIn () : boolean | undefined
  {
    return AuthenticationManager.Instance.IsLoggedIn;
  }

  public currentUserName() : string | undefined
  {
    return AuthenticationManager.Instance.CurrentCustomerUserName;
  }

  public logOut()
  {
    AuthenticationManager.Instance.CurrentCustomer = undefined;
    AuthenticationManager.Instance.IsLoggedIn = false;
    AuthenticationManager.Instance.CurrentCustomerUserName = "";
    this.router.navigate(['/carousel'])
  }

}
