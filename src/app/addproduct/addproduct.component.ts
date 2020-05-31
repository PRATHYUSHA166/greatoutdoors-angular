import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

import { WishlistService } from '../wishlist.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  submitted = false;
  constructor(private service : WishlistService,private router: Router) { 

  }
 prod : Product = new Product();
  temp : Product = new Product();
  

  ngOnInit(): void {
  }
  addProduct()
  {
    console.log(this.prod);
    this.service.addProduct(this.prod).subscribe(data=>this.temp=data);
  }

  onSubmit(){
    this.submitted=true;
    this.addProduct();
  }
 
  }

 



