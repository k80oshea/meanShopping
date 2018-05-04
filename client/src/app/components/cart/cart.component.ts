import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private userId: any;
  private cartIds: any;  
  private cart: any;
  private total: any;

  constructor(private route:ActivatedRoute, private router: Router, private pServ: ProductsService, private uServ:UsersService) { }

  ngOnInit() {
    if(!this.uServ.isValid()) this.router.navigate(["/"]);
    // if(this.uServ.isAdmin()) this.router.navigate(["/admin"]);
    this.userId = this.uServ.session();
    this.loadcart();
  }
  browse() {
    this.router.navigate(["/browse"]);    
  } 
  logout() {
    this.uServ.logout();
  }
  loadcart() {
    this.uServ.find(this.userId, data=> {
      console.log(data)
      this.cart = data.cart;
      console.log("cart", this.cart)
    });
    for(let x of this.cart) {
      this.total += x.price;
    }
  }
  updateCart() {

    this.loadcart();
  }
  buy() {
    this.uServ.purchase(this.userId, (data)=>{ 
      if(data.errors) {
        console.log("comp add err", data);
      }
      else {
        console.log("carted!");
        this.router.navigate(["/purchase"]);
      }
    });
  }
  remove(prod) {
    this.uServ.removeFromCart(this.userId, (data)=>{ 
      if(data.errors) {
        console.log("comp remove err", data);
      }
      else {
        console.log("carted!");
        this.loadcart();
      }
    });
  }
}
