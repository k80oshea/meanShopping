import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  register(user, cb) {
    this.http.post("/register", user) 
    .subscribe(data=>cb(data)); 
  }
  login(user, cb) { 
    this.http.post("/login", user) 
    .subscribe(data=>cb(data)); 
  } 
  session(cb) { //pas back user or id or admin or t/f?
    this.http.get("/session")
    .subscribe(data=>cb(data)); 
  }
  cart(id, cb) { //id???
    this.http.get("/users/"+ id)
    .subscribe(data=>cb(data)); 
  }
  logout(cb) { 
    this.http.get("/logout") 
    .subscribe(data=>cb(data)); 
  } 
}
