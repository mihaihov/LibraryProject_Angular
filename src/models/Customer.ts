import { Person } from "./Person";

export class Customer extends Person
{
    public DateJoined : Date = new Date(Date.now());
    public Status : boolean = false;
    public Email : string = "";
    public Password : string = "";
}