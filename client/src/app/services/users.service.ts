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
    // console.log("isvalid", (localStorage.getItem("userId") != undefined))
		return localStorage.getItem("userId") != undefined; // returns if T/F if userId exists in session
  }
  isAdmin() {
    // console.log("isadmin", localStorage.getItem("admin"))
		return localStorage.getItem("admin"); // returns T/F if admin
  }
  session() { 
    console.log("session", localStorage.getItem("userId"))
    return localStorage.getItem("userId");
  }
  // session2() { 
  //   this.http.get("/session") 
  //   .subscribe(data=>console.log("why do we have this at all???", data)); 
  // } 
  addToCart(prod, cb) {
    let id = localStorage.getItem("userId");
    console.log("got to the service", id)
    this.http.post("/users/"+ id, prod)
    .subscribe(data=>cb(data));
  }
  find(id, cb) {
    this.http.get("/users/"+id)
    .subscribe(data=>cb(data));
  }


}
