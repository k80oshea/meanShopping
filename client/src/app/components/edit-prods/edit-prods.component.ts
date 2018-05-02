import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-prods',
  templateUrl: './edit-prods.component.html',
  styleUrls: ['./edit-prods.component.css']
})
export class EditProdsComponent implements OnInit {
  @Input() AllProds;
  constructor(private pServ: ProductsService, private uServ: UsersService) { }

  ngOnInit() {
    // this.all();
  }
  // all() {
  //   this.pServ.all(data=>{
  //     this.products = data;
  //   });
  // }
  edit(prod) {
    this.pServ.update(prod, (data)=>{ 
      if(data.errors) {
        // this.editProd = { name: this.editProd.name, desc: this.editProd.desc, photosrc: this.editProd.photosrc, quantity: this.editProd.quantity, price: this.editProd.price };
        // this.errors = data.errors;    
        console.log(data);
      }
      else {
        // this.all();        
      }
    });
  }

}
