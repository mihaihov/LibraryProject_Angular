import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationManager } from 'src/models/AuthenticationManager';
import { Book } from 'src/models/Book';
import { MockBookRepository } from 'src/models/MockBookRepository';
import { MockLoanRepository } from 'src/models/MockLoanRepository';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public book! : Book;
  private id : number = 0;

  constructor(private route : ActivatedRoute, private _mockBookRepository : MockBookRepository,
    private _mockLoanRepository : MockLoanRepository, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this._mockBookRepository.GetBookById(this.id);
  }

  public loanBook()
  {
    if(!AuthenticationManager.Instance.IsLoggedIn) this.router.navigate(['/login']);
    else 
    {
      if (!this._mockLoanRepository.CheckIfBookIsAlreadyLoanedByCustomer(this.id))
      {
        this._mockLoanRepository.AddLoanToDb(
          {
            Id: this._mockLoanRepository._allLoans[this._mockLoanRepository._allLoans.length - 1].Id + 1,
            DateBorrowed: new Date(Date.now()), Status: 1, Customer: AuthenticationManager.Instance.CurrentCustomer,
            Book: this._mockBookRepository.GetBookById(this.id)
          }
        )
        this.router.navigate(['loaned']); 
      }
    }
  }

}
