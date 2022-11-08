import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpRequestsService } from 'src/app/Utils/http-requests.service';
import { Book } from 'src/models/Book';
import { BookRepository } from 'src/models/BookRepository';
import { MockBookRepository } from 'src/models/MockBookRepository';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  public booksOfTheMonth! : Book[];
  public sub! : Subscription;

  constructor(private _bookRepository : BookRepository) { }

  ngOnInit(): void {
    this.sub = this._bookRepository.AllBooksObs().subscribe({
      next: b=> {this.booksOfTheMonth = b.filter(bo => {return bo.IsBookOfTheMonth == true})}
    })
  }

  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }
}
