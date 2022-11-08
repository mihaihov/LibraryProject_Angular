import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Book } from "./Book";
import { IBookRepository } from "./IBookRepostiory";

@Injectable({
    providedIn: 'root'
})
export class BookRepository implements IBookRepository
{
    private Books : Book[];
    private BooksOTM : Book[];

    private allBooksURI : string = "";
    private bookByIdURI : string = "";
    private booksOfTheMonthURI : string = "";

    constructor (private client : HttpClient) 
    {
        this.Books = [];
        this.BooksOTM = [];
        this.allBooksURI = "https://localhost:7244/api/book/allbooks";
        this.booksOfTheMonthURI = "https://localhost:7244/api/book/booksofthemonth"
    }
    GetBookByIdObs(id: number): Observable<Book> {
        this.bookByIdURI = "https://localhost:7244/api/book/getbookbyid/"+id;
        return this.client.get<Book>(this.bookByIdURI);
    }
    BooksOfTheMonthObs(): Observable<Book[]> {
        return this.client.get<Book[]>(this.booksOfTheMonthURI);
    }

    AllBooksObs(): Observable<Book[]> {
        this.client.get<Book[]>(this.allBooksURI).subscribe({
            next: b => {this.Books = b;}
        })
        return this.client.get<Book[]>(this.allBooksURI);
    }
    BooksOfTheMonth(): Book[] {
        throw new Error("Not implemented yet!");
    }
    GetBookById(id: number): Book {
        return this.Books.filter(b => {return b.Id == id})[0];
    }

    AllBooks(): Book[] {
        throw new Error("Method not implemented.");
    }
}