import { Injectable } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AuthenticationManager } from "./AuthenticationManager";
import { ILoanRepository } from "./ILoanRepository";
import { Loan } from "./Loan";
import { MockBookRepository } from "./MockBookRepository";
import { MockCustomerRepository } from "./MockCustomerRepository";


@Injectable({providedIn: 'root'})
export class MockLoanRepository implements ILoanRepository
{
    public _allLoans : Loan[] = [];

    constructor(private _customerRepository : MockCustomerRepository, private _bookRepository: MockBookRepository){}

    AllLoans(): Loan[] {
        this._allLoans.push(
            {
                Id :1, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[0], Book : this._bookRepository.AllBooks()[0]
            },
            {
                Id :2, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[0], Book : this._bookRepository.AllBooks()[1]
            },
            {
                Id :3, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[0], Book : this._bookRepository.AllBooks()[2]
            },
            {
                Id :4, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[1], Book : this._bookRepository.AllBooks()[3]
            },
            {
                Id :5, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[0], Book : this._bookRepository.AllBooks()[4]
            },
            {
                Id :6, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[1], Book : this._bookRepository.AllBooks()[5]
            },
            {
                Id :7, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[1], Book : this._bookRepository.AllBooks()[6]
            },
            {
                Id :8, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[2], Book : this._bookRepository.AllBooks()[0]
            },
            {
                Id :9, DateBorrowed : new Date(Math.random(),Math.random(),Math.random()), Status : 1,
                Customer : this._customerRepository.AllCustomers()[3], Book : this._bookRepository.AllBooks()[12]
            },
        )
        return this._allLoans;
    }
    GetLoanById(id: number): Loan {
        if(this._allLoans.length < 1)   this.AllLoans();
        return this._allLoans.filter(l => {return l.Id == id})[0];
    }
    GetAllLoansByCustomer(customerId?: number): Loan[] {
        if(this._allLoans.length < 1)   this.AllLoans();
        return this._allLoans.filter(l => {return l.Customer?.Id == customerId});
    }
    GetAllLoansByBook(bookId: number): Loan[] {
        if(this._allLoans.length < 1)   this.AllLoans();
        return this._allLoans.filter(l => {return l.Book.Id == bookId})
    }
    CheckIfBookIsAlreadyLoanedByCustomer(bookId: number): boolean {
        if(this._allLoans.length < 1)   this.AllLoans();
        if(this._allLoans.filter(l => {return l.Customer?.Id == AuthenticationManager.Instance.CurrentCustomer?.Id && l.Book.Id == bookId})
                                .length>=1)
            return true;
        return false;
    }
    AddLoanToDb(l: Loan): void {
        this._allLoans.push(l);
    }
    RemoveLoanFromDb(l: Loan): void {
        this._allLoans = this._allLoans.filter(lo =>{ return lo !== l})
    }
}