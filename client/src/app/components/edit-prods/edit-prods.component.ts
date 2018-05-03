import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-prods',
  templateUrl: './edit-prods.component.html',
  styleUrls: ['./edit-prods.component.css']
})
export class EditProdsComponent implements OnInit {
  private errors: any;
  @Input() AllProds;
  @Output() myEditEvent = new EventEmitter();
  constructor(private pServ: ProductsService) { }

  ngOnInit() {
  }
  edit(prod) {
    this.pServ.update(prod, (data)=>{ 
      if(data.errors) {
        // this.editProd = { name: this.editProd.name, desc: this.editProd.desc, photosrc: this.editProd.photosrc, quantity: this.editProd.quantity, price: this.editProd.price };
        this.errors = data.errors;    
        console.log(data);
      }
      else {
        this.myEditEvent.emit(data);
      }
    });
  }
  delete(prod) {
    this.pServ.destroy(prod, (data)=>{ 
      if(data.errors) {
        this.errors = data.errors;    
      }
      else {
        this.myEditEvent.emit(data);
      }
    });
  }

}
