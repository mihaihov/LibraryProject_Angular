import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/Book';
import { MockBookRepository } from 'src/models/MockBookRepository';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public booksOfTheMonth! : Book[];

  constructor(private _mockBookRepository : MockBookRepository) { }

  ngOnInit(): void {
    this.booksOfTheMonth = this._mockBookRepository.BooksOfTheMonth();
  }

}
