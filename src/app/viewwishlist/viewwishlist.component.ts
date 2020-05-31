import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from '../wishlist';
import { WishlistService } from '../wishlist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-viewwishlist',
  templateUrl: './viewwishlist.component.html',
  styleUrls: ['./viewwishlist.component.css']
})
export class ViewwishlistComponent implements OnInit {
 
  
  arr : Wishlist [] =[];
 wishlist : Wishlist = new Wishlist();

  constructor(private service : WishlistService, private router:Router ) {
    service.getAllWishlist().subscribe( data =>{this.arr = data.body;console.log(data);
  })
  }
 
  
  ngOnInit(): void {
  }
 
}





