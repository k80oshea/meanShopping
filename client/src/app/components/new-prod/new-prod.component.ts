import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-new-prod',
  templateUrl: './new-prod.component.html',
  styleUrls: ['./new-prod.component.css']
})
export class NewProdComponent implements OnInit {
  private errors: any;
  private newProd: any;
  @Output() myNewEvent = new EventEmitter();

  constructor(private pServ: ProductsService) { }

  ngOnInit() {
    this.newProd = { 
      name: "",
      desc: "",
      photosrc: "",
      inventory: 0,
      price: 0
    };
  }
  create() {
    this.pServ.create(this.newProd, (data)=>{ 
      if(data.errors) {
        // this.newProd = { name: this.newProd.name, type: this.newProd.type, desc: this.newProd.desc, skills: this.newProd.skills };
        this.errors = data.errors;
        console.log(data.errors);
      }
      else {
        this.newProd = { 
          name: "",
          desc: "",
          photosrc: "",
          inventory: 0,
          price: 0
        };
        this.myNewEvent.emit(data);        
      }
    });
  }

}
