import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Wishlist } from '../wishlist';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-addwishlist',
  templateUrl: './addwishlist.component.html', 
  styleUrls: ['./addwishlist.component.css']
})
export class AddwishlistComponent implements OnInit {
  [x: string]: any;
  submitted = false;
  wid: any;
  product: Product;
  wish : Wishlist = new Wishlist();
  list : Wishlist = new Wishlist();

  constructor(private route: ActivatedRoute,private service : WishlistService,private router: Router) { 
   // this.wish.product.productid=101;
    //this.wid= 101;

  }
  
  


ngOnInit(): void {
  this.product = new Product();
  this.wish.product.productid = this.route.snapshot.params['id'];
 
   
}

 addWishlist()
  {
    console.log(this.wish);

   this.service.addWishlist(this.wish).subscribe(data=>this.list=data);
   
}
onSubmit(){
  this.submitted=true;
  this.addWishlist();
}

  view(){

  this.router.navigate(['/view1']); 
}
}


