import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { SingleprodComponent } from './components/singleprod/singleprod.component';
import { CartComponent } from './components/cart/cart.component';
import { BoughtComponent } from './components/bought/bought.component';
import { LogregComponent } from './components/logreg/logreg.component';
import { EditProdsComponent } from './components/edit-prods/edit-prods.component';
import { NewProdComponent } from './components/new-prod/new-prod.component';

import { UsersService } from './services/users.service';
import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminComponent,
    SingleprodComponent,
    CartComponent,
    BoughtComponent,
    LogregComponent,
    EditProdsComponent,
    NewProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
