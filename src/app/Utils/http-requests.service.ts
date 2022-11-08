import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { filter, Observable, tap } from 'rxjs';
import { Book } from 'src/models/Book';
import { Author } from 'src/models/Author';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  private booksOfTheMonthURI : string = "";
  private allBooksURI : string = "";
  private allAuthorsURI : string = "";

  constructor(private client : HttpClient) 
  {
    this.booksOfTheMonthURI = "https://localhost:7244/api/book/booksofthemonth" 
    this.allAuthorsURI = "https://localhost:7244/api/author/allauthors";
    this.allBooksURI = "https://localhost:7244/api/book/allbooks";
  }

  public GetBooksOfTheMonth() : Observable<Book[]>
  {
    return this.client.get<Book[]>(this.booksOfTheMonthURI);
  }

  public GetAllAuthors() : Observable<Author[]>
  {
    return this.client.get<Author[]>(this.allAuthorsURI);
  }

  public GetAllBooks() : Observable<Book[]>
  {
    return this.client.get<Book[]>(this.allBooksURI);
  }
}
