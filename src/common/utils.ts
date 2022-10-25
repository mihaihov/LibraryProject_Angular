import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class Utils
{
    constructor(private router : Router) {}

    public appNavigateTo(path : string, hasParameters : boolean, ...parameters : number[])
    {
        if(!hasParameters)   this.router.navigate([path]);
        else
        {
            this.router.navigate([path,parameters]);
        }
    }
}