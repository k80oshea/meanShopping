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
  private userId: any;

  constructor(private route:ActivatedRoute, private router: Router, private pServ: ProductsService, private uServ: UsersService) { }

  ngOnInit() {
    if(!this.uServ.isValid()) this.router.navigate(["/"]);
    if(!this.uServ.isAdmin()) this.router.navigate(["/browse"]);
    this.userId = this.uServ.session();

    this.all();
  }
  all() {
    this.pServ.all(data=>{
      this.products = data;
    });
  } 
  logout() {
    this.uServ.logout();
  }
}
