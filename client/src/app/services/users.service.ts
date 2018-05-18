import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }

  register(user, cb) {
    this.http.post("/register", user) 
    .subscribe(data=>cb(data)); 
  }
  login(user, cb) { 
    this.http.post("/login", user) 
    .subscribe(data=>cb(data)); 
  }   
  logout() {
    localStorage.setItem("userId", undefined);
    localStorage.setItem("admin", undefined);
    this.router.navigate(["/"]);    
  } 

  isValid() {
		return localStorage.getItem("userId") != undefined; // returns if T/F if userId exists in session
  }
  isAdmin() {
		return localStorage.getItem("admin"); // returns T/F if admin
  }
  session() { 
    return localStorage.getItem("userId");
  }
  find(id, cb) { // get user and populates on product id inside cart
    this.http.get("/users/"+id)
    .subscribe(data=>cb(data));
  }
  // findHist(id, cb) { // get user and populates on product id inside history cart arrays
  //   this.http.get("/users/history/"+id)
  //   .subscribe(data=>cb(data));
  // }
  addToCart(addProd, cb) { // adds single product and # items of product
    let id = localStorage.getItem("userId");
    this.http.put("/users/cart/"+ id, addProd)
    .subscribe(data=>cb(data));
  }
  dropFromCart(prod, cb) { // removes whole item
    let id = localStorage.getItem("userId");
    this.http.put("/users/drop/"+ id, prod)
    .subscribe(data=>cb(data));
  }
  emptyCart(id, cb) { // empties full cart
    this.http.put("/users/empty/"+ id, id)
    .subscribe(data=>cb(data));
  }  
  purchase(id, cb) { // purchases full cart
    this.http.put("/users/"+ id, id)
    .subscribe(data=>cb(data));
  }  
  updateCart(prod,cb) {
    let id = localStorage.getItem("userId");    
    this.http.put("/users/update/"+ id, prod)
    .subscribe(data=>cb(data));
  }
}
