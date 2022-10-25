import { Customer } from "./Customer"

export interface ICustomerRepository
{
    AllCustomers() : Customer[];
    GetCustomerById(id : number) : Customer;
    GetCustomerByCredentials(username : string, password: string) : Customer;
    GetCustomerByEmail(email : string) : Customer;
    RegisterNewCustomer(customer : Customer) : object;

}