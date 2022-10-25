import { Customer } from "./Customer";

export class AuthenticationManager 
{
    private static _instance : AuthenticationManager;
    public static get Instance() : AuthenticationManager
    {
        if(!this._instance) this._instance = new AuthenticationManager();
        return this._instance;
    }

    private AuthenticationManager() {}

    public IsLoggedIn : boolean = false;
    public CurrentCustomer? : Customer;
    public CurrentCustomerUserName : string ="";
}