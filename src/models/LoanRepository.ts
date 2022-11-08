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
    private loanByIdURI : string = "";
    private loansByCustomerURI : string ="";
    private loansByBookURI : string ="";
    private checkIfAlreadyLoanedByCustomerURI = "";

    constructor(private client : HttpClient)
    {
        this.allLoansURI = "https://localhost:7244/api/loan/allloans";
    }
    CheckIfBookIsAlreadyLoanedByCustomerObs(bookId: number): Observable<boolean> {
        this. checkIfAlreadyLoanedByCustomerURI = "https://localhost:7244/api/loan/CheckIfBookIsAlreadyLoanedByCustomer/"+bookId+"/"+AuthenticationManager.Instance.CurrentCustomer?.Id;
        return this.client.get<boolean>(this.checkIfAlreadyLoanedByCustomerURI);
    }
    GetLoanByIdObs(id: number): Observable<Loan> {
        this.loanByIdURI = "https://localhost:7244/api/loan/getloanbyid/"+id;
        return this.client.get<Loan>(this.loanByIdURI);
    }
    GetAllLoansByCustomerObs(customerId: number): Observable<Loan[]> {
        this.loansByCustomerURI = "https://localhost:7244/api/loan/getloansbycustomer/"+customerId;
        return this.client.get<Loan[]>(this.loansByCustomerURI);
    }
    GetAllLoansByBookObs(bookId: number): Observable<Loan[]> {
        this.loansByBookURI = "https://localhost:7244/api/loan/getloansbybook/"+bookId;
        return this.client.get<Loan[]>(this.loansByBookURI);
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
        throw new Error("Not implemented!");
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