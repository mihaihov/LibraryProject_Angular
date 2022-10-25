import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationManager } from 'src/models/AuthenticationManager';

@Injectable({
  providedIn: 'root'
})
export class MyaccountGuard implements CanActivate {

  constructor(private route : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!AuthenticationManager.Instance.IsLoggedIn)
    {
      this.route.navigate(['/carousel']);
      return false;
    }
      
    return true;
  }
  
}
