import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/Book';
import { MockBookRepository } from 'src/models/MockBookRepository';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public books : Book[] = [];

  constructor(private _bookRepository : MockBookRepository) { }

  ngOnInit(): void {
    this.books = this._bookRepository.AllBooks();
  }

}
