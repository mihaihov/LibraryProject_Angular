import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "./Customer";
import { ICustomerRepository } from "./ICustomerRepository";

@Injectable({
    providedIn: 'root'
})
export class CustomerRepository implements ICustomerRepository
{
    private allCustomersURI : string = "";
    private customerByCredentialsURI = "";
    private customerByIdURI = "";
    private customerByEmailURI = "";
    private Customers! : Customer[];

    constructor(private client : HttpClient)
    {
        this.allCustomersURI = "https://localhost:7244/api/customer/allcustomers";
        this.customerByCredentialsURI = "https://localhost:7244/api/customer/getcustomerbycredentials";
        this.Customers = [];
    }
    GetCustomerByIdObs(id: number): Observable<Customer> {
        this.customerByIdURI = "https://localhost:7244/api/customer/getcustomerbyid/" + id;
        return this.client.get<Customer>(this.customerByIdURI);
    }
    GetCustomerByEmailObs(email: string): Observable<Customer> {
        this.customerByEmailURI = "https://localhost:7244/api/customer/getcustomerbyemail/" + email;
        return this.client.get<Customer>(this.customerByEmailURI);
    }
    GetCustomerByCredentialsObs(username : string, password: string): Observable<Customer> {
        this.customerByCredentialsURI = "https://localhost:7244/api/customer/getcustomerbycredentials"
        this.customerByCredentialsURI +="/"+username+"/"+password;
        return this.client.get<Customer>(this.customerByCredentialsURI);
    }

    AllCustomers(): Customer[] {
        throw new Error("Not implemented!");
    }
    GetCustomerById(id: number): Customer {
        return this.Customers.filter(c => {return c.Id ==id})[0];
    }
    GetCustomerByCredentials(username: string, password: string): Customer {
        throw new Error("Not Implemented!");
    }
    GetCustomerByEmail(email: string): Customer {
        return this.Customers.filter(c => {return c.Email == email})[0];
    }
    RegisterNewCustomer(customer: Customer): object {
        throw new Error("Method not implemented.");
    }
    AllCustomersObs(): Observable<Customer[]> {
        return this.client.get<Customer[]>(this.allCustomersURI);
    }
    
}