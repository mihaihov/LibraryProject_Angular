import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MockBookRepository } from 'src/models/MockBookRepository';

@Injectable({
  providedIn: 'root'
})
export class ProtectDetailsGuard implements CanActivate {

  constructor (private route: Router, private _mockBookRepository : MockBookRepository) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id))
      {
        alert("Invalid book");
        this.route.navigate(['/carousel'])
        return false;
      }
      if(this._mockBookRepository.GetBookById(id) == null)
      {
        alert("Invalid book!");
        this.route.navigate(['/carousel'])
        return false;
      }
      return true;
  }
  
}
