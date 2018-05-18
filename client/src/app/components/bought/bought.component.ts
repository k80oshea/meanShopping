import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-bought',
  templateUrl: './bought.component.html',
  styleUrls: ['./bought.component.css']
})
export class BoughtComponent implements OnInit {
  private userId: any;
  private history: any;
  private lastPurch: any;
  private total: any;

  constructor(private route:ActivatedRoute, private router: Router, private pServ: ProductsService, private uServ:UsersService) { }

  ngOnInit() {
    if(!this.uServ.isValid()) this.router.navigate(["/"]);
    this.userId = this.uServ.session();
    this.getHistory();
  }
  browse() {
    this.router.navigate(["/browse"]);    
  } 
  logout() {
    this.uServ.logout();
  }
  getHistory() {
    this.uServ.find(this.userId, data=> {
      this.history = data.history;
      console.log(data);
      // console.log(data['history'][0]);
      for(let x in data.history) {
        for(let y in data.history[x]) {
          console.log("boo", data.history[x][y].item);   
        }       
      }
      this.lastPurch = (this.history[this.history.length-1]);
      // console.log("jojo", this.history);
      // console.log(this.lastPurch);
    })
  }
}
