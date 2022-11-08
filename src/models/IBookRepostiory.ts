import { Observable } from "rxjs";
import { Book } from "./Book";

export interface IBookRepository
{
    AllBooks() : Book[];
    BooksOfTheMonth() : Book[];
    GetBookById(id : number) : Book;
    AllBooksObs() : Observable<Book[]>
    GetBookByIdObs(id : number) : Observable<Book>;
    BooksOfTheMonthObs() : Observable<Book[]>;
}