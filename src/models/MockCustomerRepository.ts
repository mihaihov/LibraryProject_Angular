import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "./Customer";
import {ICustomerRepository} from "./ICustomerRepository"

@Injectable({
    providedIn: 'root'
})
export class MockCustomerRepository implements ICustomerRepository
{
    GetCustomerByIdObs(id: number): Observable<Customer> {
        throw new Error("Method not implemented.");
    }
    GetCustomerByEmailObs(email: string): Observable<Customer> {
        throw new Error("Method not implemented.");
    }
    GetCustomerByCredentialsObs(username : string, password: string): Observable<Customer> {
        throw new Error("Method not implemented.");
    }
    AllCustomersObs(): Observable<Customer[]> {
        throw new Error("Method not implemented.");
    }
    private _allCustomers : Customer[] = [];

    AllCustomers(): Customer[] {
       this._allCustomers.push(
        {
            Id : 1, Name : "Raducu Mihai", Age : 26 , CNP : "129312381", DateJoined : new Date(Date.now()), Status : true,
            Email : "raducumihaicristian@gmail.com", Password: "123456"
        },
        {
            Id : 2, Name : "Raducu Irina", Age : 31 , CNP : "512897214", DateJoined : new Date(Date.now()), Status : true,
            Email : "raducumariairina@gmail.com", Password: "123456"
        },
        {
            Id : 3, Name : "Raducu Florina", Age : 50 , CNP : "41284191", DateJoined : new Date(Date.now()), Status : true,
            Email : "raducuflorina@gmail.com", Password: "123456"
        },
        {
            Id : 4, Name : "Raducu Ilie", Age : 53 , CNP : "41298121", DateJoined : new Date(Date.now()), Status : true,
            Email : "raducuilie@gmail.com", Password: "123456"
        }
       )
       return this._allCustomers;
    }
    GetCustomerById(id : number): Customer {
        if(this._allCustomers.length<1) this.AllCustomers();
        return this.AllCustomers().filter(c => {return c.Id == id})[0]
    }
    GetCustomerByCredentials(username: string, password: string): Customer {
        if(this._allCustomers.length<1) this.AllCustomers();
        return this.AllCustomers().filter(c => {return c.Email == username && c.Password == password})[0];
    }
    GetCustomerByEmail(email: string): Customer {
        if(this._allCustomers.length<1) this.AllCustomers();
        return this.AllCustomers().filter(c => {return c.Email == email})[0]
    }
    RegisterNewCustomer(customer: Customer): object {
        throw new Error("Method not implemented.");
    }

}