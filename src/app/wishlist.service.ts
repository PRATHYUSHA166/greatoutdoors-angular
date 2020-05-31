
import { Injectable } from '@angular/core';



import { HttpClient, HttpResponse } from '@angular/common/http';
import { Wishlist } from './wishlist';
import { Observable } from 'rxjs';
import { Product } from './Product';
import {map} from 'rxjs/operators';
import { User } from './user';




@Injectable({
  providedIn: 'root'
})
export class WishlistService {
 
  
 

  private baseUrl = 'http://localhost:9090/wishlist';
  private baseUrl1 = 'http://localhost:9090/product';

  
  constructor(private http: HttpClient) { }

   
  getAllWishlist() : Observable<HttpResponse<Wishlist []>>
  {
      return this.http.get<Wishlist []>(this.baseUrl,{observe: 'response'});
  }
  
  
  
  getAppProduct():Observable<HttpResponse<Product[]>>
  {
    return this.http.get<Product []>(this.baseUrl1,{observe: 'response'});
  }

  addProduct(product : Product ) : Observable<Product>
  {
   // console.log("Service : "+product.productid);
   console.log(product);
    return this.http.post<Product>("http://localhost:9090/product",product);
  }
  addWishlist(wishlist : Wishlist ) : Observable<Wishlist>
  {
    console.log("Service : "+wishlist.wid);
    return this.http.post<Wishlist>("http://localhost:9090/wishlist",wishlist);
  }
 
  findUserLogin(username: string,password :string) : Observable<User>{
  return this.http.get<User>("http://localhost:9090/admin/login/"+username+"/"+password);
}
}







