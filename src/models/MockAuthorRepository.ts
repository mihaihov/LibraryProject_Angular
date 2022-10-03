import { Injectable } from "@angular/core";
import { Author } from "./Author";
import { IAuthorRepository } from "./IAuthorRepository";

@Injectable({
    providedIn : 'root'
})
export class MockAuthorRepository implements IAuthorRepository
{
    public AllAuthors(): Author[] {
        let a : Array<Author> = [];
        a.push(
            {Id : 1, Name : "George Orwell", Age : 51, CNP:"15101011234" },
            {Id : 2, Name : "Stephen Hawking", Age : 47, CNP:"178121014321" },
            {Id : 3, Name : "Dave Eggers", Age : 83, CNP:"13702047865" },
            {Id : 4, Name : "Ishamel Beah", Age :36, CNP:"18904089182" },
            {Id : 5, Name : "Frank Herbert", Age : 61, CNP:"14101039182" },
            {Id : 6, Name : "DavId Sedaris", Age : 48, CNP:"15409016510" },
        );

        return a;
    }

    public GetAuthorById(id : number) : any {
        return this.AllAuthors().filter((a : Author) =>  a.Id == id);
    }

}