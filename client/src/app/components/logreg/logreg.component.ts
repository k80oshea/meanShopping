import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private uServ:UsersService, private router: Router) { 

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
    this.uServ.logout();
  }

  register() {
    this.uServ.register(this.regging, (data=> {
      if(data.errors) {
        console.log("reg err", data.errors);
        this.regerrs = data.errors;
      }
       else {
        this.regging= {
          first: "",
          last: "",
          email: "",
          password: "",
          confirm: ""
        };
        localStorage.setItem("userId", data._id);
        localStorage.setItem("admin", data.admin);
        if(data.admin == true) {
          this.router.navigate(["/admin"]); 
        }
        else {
          this.router.navigate(["/products"]);
        }
      }
    }))
  }
  login() {
    this.uServ.login(this.logging, (data=> {
      if(data.errors) {
        console.log("log err", data.errors);
        this.logerrs = data.errors;
      }
      else {
        this.logging= {
          email: "",
          password: ""
        };
        localStorage.setItem("userId", data._id);
        localStorage.setItem("admin", data.admin);
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
