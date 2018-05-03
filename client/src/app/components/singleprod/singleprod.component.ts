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

  constructor(private pServ: ProductsService, private uServ: UsersService) { }

  ngOnInit() {
    this.cartProd = { 
      prodId: this.selected._id,
      // userId: this.userId,
      quantity: 1
    };
  }
  addToCart() {
    // need quant, pId, &?userId
    console.log(this.cartProd)
    this.uServ.addToCart(this.cartProd, (data)=>{ 
      if(data.errors) {
        console.log(data);
      }
      else {
        // console.log("edited!");
        this.myCartEvent.emit(data);
      }
    });
  }

}
