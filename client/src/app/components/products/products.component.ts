import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: any;
  private user: any;

  constructor(private route:ActivatedRoute, private router: Router, private pServ: ProductsService, private uServ:UsersService) { }

  ngOnInit() {
    // if(!this.user) {
    //   this.session();
    // }
    this.all();
  }
  session () {
    this.uServ.session((data)=>{
      if(data == false) {
        this.router.navigate(["/"]); 
      }
      else {
        this.user = data;
      }
    })
  }
  cart() {
    this.router.navigate(["/cart"]);    
  }
  all() {
    this.pServ.all(data=>{
      this.products = data;
    });
  }
  logout() {
    this.uServ.logout(data=>{
      if(data == true) {
        this.router.navigate(["/"]);      
      }
    });
  }
  selectprod(id) {

  }
}