import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationManager } from "./AuthenticationManager";
import { ILoanRepository } from "./ILoanRepository";
import { Loan } from "./Loan";

@Injectable({
    providedIn: 'root'
})
export class LoanRepository implements ILoanRepository
{
    private Loans! : Loan[];
    private allLoansURI : string;

    constructor(private client : HttpClient)
    {
        this.allLoansURI = "https://localhost:7244/api/loan/allloans";
    }

    AllLoans(): Loan[] {
        throw new Error("Method not implemented.");
    }
    GetLoanById(id: number): Loan {
        return this.Loans.filter(l => {return l.Id == id})[0];
    }
    GetAllLoansByCustomer(customerId: number): Loan[] {
        return this.Loans.filter(l => {return l.Book.Id == customerId});
    }
    GetAllLoansByBook(bookId: number): Loan[] {
        return this.Loans.filter(l => {return l.Book.Id == bookId});
    }
    CheckIfBookIsAlreadyLoanedByCustomer(bookId: number): boolean {
        let l = this.Loans.filter(l => {return l.Book.Id == bookId && l.Customer?.Id == AuthenticationManager.Instance.CurrentCustomer?.Id})[0];
        if(l)   return true;
        return false;
    }
    AddLoanToDb(l: Loan): void {
        throw new Error("Method not implemented.");
    }
    RemoveLoanFromDb(l: Loan): void {
        throw new Error("Method not implemented.");
    }
    AllLoansObs(): Observable<Loan[]> {
        this.client.get<Loan[]>(this.allLoansURI).subscribe({
            next: l => {this.Loans = l}
        })
        return this.client.get<Loan[]>(this.allLoansURI);
    }
    
}