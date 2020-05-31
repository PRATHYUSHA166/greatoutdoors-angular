import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { WishlistService } from '../wishlist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
 
  arr : Product [] =[];
  product : Product = new Product();
  
  constructor(private route: ActivatedRoute, private service : WishlistService, private router: Router) { 
    service.getAppProduct().subscribe( data =>{this.arr = data.body;console.log(data);
  })


}
  ngOnInit(): void {
  
  }
    add(id: number){
    this.router.navigate(['/add1',id]);
}
}

