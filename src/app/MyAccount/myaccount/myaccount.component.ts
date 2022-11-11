import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationManager } from 'src/models/AuthenticationManager';
import { BookRepository } from 'src/models/BookRepository';
import { Customer } from 'src/models/Customer';
import { CustomerRepository } from 'src/models/CustomerRepository';
import { Loan } from 'src/models/Loan';
import { LoanRepository } from 'src/models/LoanRepository';
import { MockLoanRepository } from 'src/models/MockLoanRepository';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  public currentCustomer? : Customer;
  public loansByCustomer : Loan[] = [];

  constructor(private _loansRepository : LoanRepository, private router: Router, private client : HttpClient,
    private _customerRepository : CustomerRepository, private _bookRepository : BookRepository) { }

  ngOnInit(): void {
    this.currentCustomer = AuthenticationManager.Instance.CurrentCustomer;
    this.getLoansByCustomer();
    
  }

  public getLoansByCustomer() : void
  {
    let customerEmail = AuthenticationManager.Instance.CurrentCustomerUserName;
    this._customerRepository.GetCustomerByEmailObs(customerEmail).subscribe({
      next: c => {
          this._loansRepository.GetAllLoansByCustomerCompleteObjectObs(c.Id).subscribe({
            next: l => {this.loansByCustomer = l;}
          })
        }
    })
  }

  public returnBook(l : Loan)
  {
    this._loansRepository.RemoveLoanFromDbObs(l.Id).subscribe({
      
    });
    this.router.navigate(['loaned'])
  }

}
