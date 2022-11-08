import { Observable } from "rxjs";
import { Loan } from "./Loan";

export interface ILoanRepository
{
    AllLoans() : Loan[];
    GetLoanById(id : number) : Loan;
    GetAllLoansByCustomer(customerId : number) : Loan[];
    GetAllLoansByBook(bookId : number) : Loan[];
    CheckIfBookIsAlreadyLoanedByCustomer(bookId : number) : boolean;
    AddLoanToDb(l : Loan) : void;
    RemoveLoanFromDb(l: Loan) : void;
    AllLoansObs() : Observable<Loan[]>;
    GetLoanByIdObs(id : number) : Observable<Loan>;
    GetAllLoansByCustomerObs(customerId : number) : Observable<Loan[]>
    GetAllLoansByBookObs(bookId : number) : Observable<Loan[]>
    CheckIfBookIsAlreadyLoanedByCustomerObs(bookId : number) : Observable<boolean>;
}