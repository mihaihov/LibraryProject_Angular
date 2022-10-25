import { Book } from "./Book";

export interface IBookRepository
{
    AllBooks() : Book[];
    BooksOfTheMonth() : Book[];
    GetBookById(id : number) : Book;
}