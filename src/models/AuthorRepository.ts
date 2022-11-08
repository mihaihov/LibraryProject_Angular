import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Author } from "./Author";
import { IAuthorRepository } from "./IAuthorRepository";

@Injectable({
    providedIn: 'root'
})
export class AuthorRepository  implements IAuthorRepository
{
    private Authors! : Author[];
    private allAuthorsURI : string = "";
    private authorByIdURI : string = "";

    constructor(private client : HttpClient)
    {
        this.allAuthorsURI = "https://localhost:7244/api/author/allauthors";
    }
    GetAuthorByIdObs(id: number): Observable<Author> {
        this.authorByIdURI = "https://localhost:7244/api/author/allauthors/" + id;
        return this.client.get<Author>(this.authorByIdURI);
    }

    AllAuthorsObs(): Observable<Author[]> {
        return this.client.get<Author[]>(this.allAuthorsURI);
    }

    GetAuthorById(id: number): Author {
        throw new Error("Not implemented yet!");
    }
   
    AllAuthors(): Author[] {
        throw new Error("Not implemented method!");
    }
}