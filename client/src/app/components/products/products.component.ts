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
  private userId: any;
  private selectprod: any;
  private selected: any;

  constructor(private route:ActivatedRoute, private router: Router, private pServ: ProductsService, private uServ:UsersService) { }

  ngOnInit() {
    if(!this.uServ.isValid()) this.router.navigate(["/"]);
    // if(this.uServ.isAdmin()) this.router.navigate(["/admin"]);
    this.userId = this.uServ.session();
    console.log(this.userId)
    this.all();
  }
  all() {
    this.pServ.all(data=>{
      this.products = data;
    });
  }
  cart() {
    this.router.navigate(["/cart/"+this.userId]);    
  }
  logout() {
    this.uServ.logout();
  }
  select(prod) {
    this.selectprod = true;
    this.selected = prod;  
  }
}