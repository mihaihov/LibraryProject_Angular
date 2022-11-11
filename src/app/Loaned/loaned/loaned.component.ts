import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockBookRepository } from 'src/models/MockBookRepository';
import { MockLoanRepository } from 'src/models/MockLoanRepository';

@Component({
  selector: 'app-loaned',
  templateUrl: './loaned.component.html',
  styleUrls: ['./loaned.component.css']
})
export class LoanedComponent implements OnInit {

  public outputMessage : string = "";

  constructor(private route : Router, private _mockLoanRepository : MockLoanRepository, private _mockBookRepository : MockBookRepository) { }

  ngOnInit(): void 
  {
    this.outputMessage = "Book borrowed successfully!Enjoy!";
  }

  public backToMainPage() : void
  {
    this.route.navigate(['carousel']);
  }
}
