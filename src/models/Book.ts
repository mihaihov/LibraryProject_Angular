import { Author } from "./Author";

export class Book
{
    public Id : number = 0;
    public Title : string = "";
    public ImageUrl : string = "";
    public Cathegory : string = "";
    public PublicationYear : number = 0;
    public CopiesAvailable : number = 0;
    public Description : string = "";
    public IsBookOfTheMonth : boolean = false;
    public Author : Author = new Author();

}