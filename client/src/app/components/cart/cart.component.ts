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
  private numItems: any;

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
      this.total = 0;
      this.numItems = 0;
      this.cart = data.cart;
      // console.log(this.cart)
      for(let x of this.cart) {
        this.total += (x.item.price * x.quantity);
        this.numItems += x.quantity;
      }
      console.log(this.cart);
    });
  }
  drop(prod) { //remove whole prod
    this.uServ.dropFromCart(prod, (data)=>{ 
      if(data.errors) {
        console.log("comp remove err", data);
      }
      else {
        console.log("removed!");
        this.loadcart();
      }
    });
  }
  empty() {
    this.uServ.emptyCart(this.userId, (data)=>{ 
      if(data.errors) {
        console.log("comp empty err", data);
      }
      else {
        console.log("carted!");
        this.loadcart();
      }
    });
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
  updateCart(prod) {

    this.loadcart();
  }

}
