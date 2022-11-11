import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationManager } from 'src/models/AuthenticationManager';
import { Book } from 'src/models/Book';
import { BookRepository } from 'src/models/BookRepository';
import { LoanRepository } from 'src/models/LoanRepository';
import { MockBookRepository } from 'src/models/MockBookRepository';
import { MockLoanRepository } from 'src/models/MockLoanRepository';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public book : Book;
  private id : number = 0;

  constructor(private route : ActivatedRoute, private _bookRepository : BookRepository,
    private _loanRepository : LoanRepository, private router: Router) 
    {
      this.book = new Book();
    }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._bookRepository.GetBookByIdObs(this.id).subscribe({
      next: b => this.book = b
    });
  }

  public loanBook()
  {
    if(!AuthenticationManager.Instance.IsLoggedIn) this.router.navigate(['/login']);
    else 
    {
      this._loanRepository.CheckIfBookIsAlreadyLoanedByCustomerObs(this.id).subscribe({
        next: l =>{
          if(l == false)
          {
            this._loanRepository.AddLoanToDbObs({
              DateBorrowed : new Date(Date.now()),
              Status : 1,
              CustomerId : AuthenticationManager.Instance.CurrentCustomer?.Id,
              BookId : this.id
            }).subscribe({
              next: result => { console.log(result);
                if(result)
                  this.router.navigate(['loaned']); 
              }
            })
          }
          else
          {
            alert("You already own a copy of this book");
          }
        }
      })


      // if (!this._mockLoanRepository.CheckIfBookIsAlreadyLoanedByCustomer(this.id))
      // {
      //   this._mockLoanRepository.AddLoanToDb(
      //     {
      //       Id: this._mockLoanRepository._allLoans[this._mockLoanRepository._allLoans.length - 1].Id + 1,
      //       DateBorrowed: new Date(Date.now()), Status: 1, Customer: AuthenticationManager.Instance.CurrentCustomer,
      //       Book: this._bookRepository.GetBookById(this.id)
      //     }
      //   )
      //   this.router.navigate(['loaned']); 
      // }
    }
  }

}
