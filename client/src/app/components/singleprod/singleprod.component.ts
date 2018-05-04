import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-singleprod',
  templateUrl: './singleprod.component.html',
  styleUrls: ['./singleprod.component.css']
})
export class SingleprodComponent implements OnInit {
  @Input() userId;
  @Input() selected;  
  @Output() myCartEvent = new EventEmitter();
  private cartProd: any; 
  // private newProd: any;

  constructor(private pServ: ProductsService, private uServ: UsersService) { }

  ngOnInit() {
    this.cartProd = { 
      prodId: this.selected._id,
      quantity: 1
    };

  }
  addToCart() {
    // console.log("singleprod 1", prod)    
    console.log("add to cart", this.cartProd)
    this.uServ.addToCart(this.cartProd, (data)=>{ 
      if(data.errors) {
        console.log("comp add err", data);
      }
      else {
        console.log("carted!");
        this.myCartEvent.emit(data);
      }
    });
  }

}
