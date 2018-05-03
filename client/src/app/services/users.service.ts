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

  find(id, cb) {
    this.http.get("/users/"+id)
    .subscribe(data=>cb(data));
  }

  addToCart(prod, cb) {
    this.http.post("/users/"+ localStorage.getItem("userId"), prod)
    .subscribe(data=>cb(data));    
  }
}
