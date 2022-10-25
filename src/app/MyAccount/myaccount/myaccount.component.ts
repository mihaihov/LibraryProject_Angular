import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationManager } from 'src/models/AuthenticationManager';
import { Customer } from 'src/models/Customer';
import { Loan } from 'src/models/Loan';
import { MockLoanRepository } from 'src/models/MockLoanRepository';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  public currentCustomer? : Customer;

  constructor(private _loansRepository : MockLoanRepository, private router: Router) { }

  ngOnInit(): void {
    this.currentCustomer = AuthenticationManager.Instance.CurrentCustomer;
  }

  public loansByCustomer() : Loan[]
  {
    return this._loansRepository.GetAllLoansByCustomer(this.currentCustomer?.Id);
  }

  public returnBook(l : Loan)
  {
    this._loansRepository.RemoveLoanFromDb(l);
    this.router.navigate(['loaned'])
  }

}
