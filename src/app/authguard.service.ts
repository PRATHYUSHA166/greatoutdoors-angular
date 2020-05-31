import { Injectable } from '@angular/core';

import { WishlistService } from './wishlist.service';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router:Router,private service:WishlistService) { }
  canActivate(route: ActivatedRouteSnapshot ){
    let flag = false ;
    let user = sessionStorage.getItem("user");

    if( user )
    {
        flag=true;
    }
    return flag ;


}
  }

