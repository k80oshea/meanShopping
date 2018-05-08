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
  @Output() myCart2Event = new EventEmitter();
  private addProd: any = { 
    prodId: 0,
    quantity: 1
  }; 

  constructor(private pServ: ProductsService, private uServ: UsersService) { }

  ngOnInit() {
    this.addProd = { 
      prodId: this.selected._id,
      quantity: 1
    };

  }
  addToCart(buying) {
    // console.log("add to cart buying", buying)
    // console.log("add to cart quant", buying.quantity)
    this.addProd.quantity = buying.quantity;  
    console.log("add to cart addprod", this.addProd)
    // console.log("the item", this.selected._id)
    this.uServ.addToCart(this.addProd, (data)=>{ 
      if(data.errors) {
        console.log("comp add err", data);
      }
      else {
        console.log("carted!");
        this.myCartEvent.emit(data);
        this.myCart2Event.emit(data);
      }
    });
  }

}
