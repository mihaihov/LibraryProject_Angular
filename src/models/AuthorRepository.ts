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

    constructor(private client : HttpClient)
    {
        this.allAuthorsURI = "https://localhost:7244/api/author/allauthors";
    }

    AllAuthorsObs(): Observable<Author[]> {
        return this.client.get<Author[]>(this.allAuthorsURI);
    }

    GetAuthorById(id: number): Author {
        return this.Authors.filter(a => {return a.Id == id})[0];
    }
   
    AllAuthors(): Author[] {
        throw new Error("Not implemented method!");
    }
}