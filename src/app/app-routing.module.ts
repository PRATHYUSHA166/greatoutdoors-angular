import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewwishlistComponent } from './viewwishlist/viewwishlist.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddwishlistComponent } from './addwishlist/addwishlist.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';



const routes: Routes = [
  {
    path : 'view',
    component : ViewwishlistComponent
  },
  {
    path : 'view1',
    component : ViewproductComponent,
    //canActivate : [AuthguardService]
  },
  {
    path : 'add',
    component : AddproductComponent
  },
  {
    path : 'add1/:id',
    component : AddwishlistComponent
  },
  {
    path : 'login',
    component : LoginComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
