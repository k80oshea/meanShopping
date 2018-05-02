import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
  private regging: any;
  private logging: any;
  private regerrs: any;
  private logerrs: any;

  constructor(private uServ:UsersService, private route:ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    this.regging={
      first: "",
      last: "",
      email: "",
      password: "",
      confirm: ""
    };
    this.logging= {
      email: "",
      password: ""
    };
  }

  register() {
    this.uServ.register(this.regging, (data=> {
      if(data.errors) {
        console.log("12 - data.err", data.errors); // should be user registering or errors
        for(let x in data.errors) {
          this.regerrs.push(data.errors[x]);
        }
      }
       else {
        this.regging= {
          first: "",
          last: "",
          email: "",
          password: "",
          confirm: ""
        };
        if(data.admin) {
          // console.log("admin redirect")          
          this.router.navigate(["/admin"]); 
        }
        else {
          // console.log("user redirect")          
          this.router.navigate(["/products"]);
        }
      }
    }))
  }
  login() {
    this.uServ.login(this.logging, (data=> {
      if(data.errors) {
        this.logerrs = data.errors;
      }
      else {
        this.logging= {
          email: "",
          password: ""
        };
        if(data.admin ==true) {
          this.router.navigate(["/admin"]);
        }
        else {
          this.router.navigate(["/browse"]);
        }
      }
    }))
  }
}
