import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable()
export class ProductsService {
  constructor(private http:HttpClient) { 

  }
  all(cb) {
    this.http.get("/products")
    .subscribe(data=>cb(data));
  }
  create(prod, cb) { 
    this.http.post("/products", prod) 
    .subscribe(data=>cb(data)); 
  }   
  find(id, cb) {
    this.http.get("/products/"+id)
    .subscribe(data=>cb(data));
  }
  update(prod, cb) {
    this.http.put("/products/"+prod._id, prod)
    .subscribe(data=>cb(data));
  } 
  destroy(prod, cb) {
    this.http.delete("/products/"+prod._id)
    .subscribe(data=>cb(data));
  }
  
}
