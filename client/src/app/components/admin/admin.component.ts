import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private products: any;
  private newProd: any;
  private errors: any;
  private user: any;
  @Output() myEvent = new EventEmitter();

  constructor(private route:ActivatedRoute, private router: Router, private pServ: ProductsService, private uServ: UsersService) { }

  ngOnInit() {
    // if(!this.user) {
      this.session();
    // }
    this.all();
    this.newProd = { 
      name: "",
      desc: "",
      photosrc: "",
      quantity: 0,
      price: 0
    };
    // this.route.params.subscribe((params: Params) => this.petId = params['id']);
  }
  session() {
    this.uServ.session((data)=>{
      // console.log(data);
      if(data == false) {
        this.router.navigate(["/"]); ///how to redirect for users logged in to prev page?
      }
      else {
        this.user = data;    
        if(this.user.admin == false) {
          this.router.navigate(["/products"]); 
        }       
      }
    })
  }
  browse() {
    this.router.navigate(["/browse"]);    
  }
  all() {
    this.pServ.all(data=>{
      this.products = data;
    });
  }
  create() {
    this.pServ.create(this.newProd, (data)=>{ 
      if(data.errors) {
        // this.newProd = { name: this.newProd.name, type: this.newProd.type, desc: this.newProd.desc, skills: this.newProd.skills };
        this.errors = data.errors;
        console.log(data.errors);
      }
      else {
        this.myEvent.emit(data);        
        this.all();
        this.newProd = { 
          name: "",
          desc: "",
          photosrc: "",
          quantity: 0,
          price: 0
        };
      }
    });
  }
  edit(prod) {
    this.pServ.update(prod, (data)=>{ 
      if(data.errors) {
        // this.editProd = { name: this.editProd.name, desc: this.editProd.desc, photosrc: this.editProd.photosrc, quantity: this.editProd.quantity, price: this.editProd.price };
        // this.errors = data.errors;    
        console.log(data);
      }
      else {
        this.all();        
      }
    });
  }
  logout() {
    this.uServ.logout(data=>{
      if(data == true) {
        this.router.navigate(["/"]);      
      }
    });
  }
}
