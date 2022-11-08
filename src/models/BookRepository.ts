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

    constructor (private client : HttpClient) 
    {
        this.Books = [];
        this.BooksOTM = [];
        this.allBooksURI = "https://localhost:7244/api/book/allbooks";
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