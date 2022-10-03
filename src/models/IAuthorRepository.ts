import { Author } from "./Author";

export interface IAuthorRepository
{
    AllAuthors() : Author[];
    GetAuthorById(id : number) : any;
}