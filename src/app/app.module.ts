import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule }  from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewwishlistComponent } from './viewwishlist/viewwishlist.component';
import { WishlistService } from './wishlist.service';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddwishlistComponent } from './addwishlist/addwishlist.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewwishlistComponent,
    ViewproductComponent,
    AddproductComponent,
    AddwishlistComponent,
    LoginComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
