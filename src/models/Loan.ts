import { Book } from "./Book";
import { Customer } from "./Customer";

export class Loan
{
    public Id : number = 0;
    public DateBorrowed : Date = new Date(Date.now());
    public Status : number = 0;
    public Customer? : Customer;
    public Book! : Book;
}