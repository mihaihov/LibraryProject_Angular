import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/models/Book';
import { BookRepository } from 'src/models/BookRepository';
import { MockBookRepository } from 'src/models/MockBookRepository';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  public books : Book[] = [];
  private sub! : Subscription;

  constructor(private _bookRepository : BookRepository) { }

  ngOnInit(): void {
    this.sub = this._bookRepository.AllBooksObs().subscribe({
      next: b => {this.books = b;}
    })
  }

  ngOnDestroy(): void {
    if(this.sub)  this.sub.unsubscribe();
  }

}
