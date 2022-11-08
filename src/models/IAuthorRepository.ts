import { Observable } from "rxjs";
import { Author } from "./Author";

export interface IAuthorRepository
{
    AllAuthors() : Author[];
    GetAuthorById(id : number) : Author;
    AllAuthorsObs() : Observable<Author[]>
    GetAuthorByIdObs(id: number) : Observable<Author>;
}