import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidationErrors} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationManager } from 'src/models/AuthenticationManager';
import { CustomerRepository } from 'src/models/CustomerRepository';
import { MockCustomerRepository } from 'src/models/MockCustomerRepository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formIsValid : boolean = false;
  public userNameFieldMessage : string = "";
  public passwordFieldMessage : string = "";
  public UserName : string = "";
  public Password : string = "";


  loginForm : FormGroup;
  constructor(private fb : FormBuilder, private _customerRepository : CustomerRepository, private router: Router) { 
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required,Validators.minLength(3)]],
      password: ['',[Validators.required,Validators.minLength(3)]]
    });
  }
  ngOnInit(): void {
  }

  public formSubmit() : void
  {
    if(!this.loginForm.valid)
    {
      this.formIsValid=true;
      if(this.loginForm.controls['userName'].hasError('required'))
      {
        this.userNameFieldMessage = "Field is required!";
      }
      if(this.loginForm.controls['password'].hasError('required'))
      {
        this.passwordFieldMessage = "Field is required!"
      }
      return;
    }
    this._customerRepository.GetCustomerByCredentialsObs(this.UserName,this.Password).subscribe({
      next: b => {
        if(b)
        {
          AuthenticationManager.Instance.CurrentCustomer = b;
          AuthenticationManager.Instance.IsLoggedIn = true;
          AuthenticationManager.Instance.CurrentCustomerUserName = AuthenticationManager.Instance.CurrentCustomer.Email;
          this.router.navigate(['/carousel']);
          return;
        }
        else
        {
          console.log("Unknown user!");
        }
      }
    })



  }
}