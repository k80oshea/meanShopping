webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var products_component_1 = __webpack_require__("./src/app/components/products/products.component.ts");
var admin_component_1 = __webpack_require__("./src/app/components/admin/admin.component.ts");
var cart_component_1 = __webpack_require__("./src/app/components/cart/cart.component.ts");
var bought_component_1 = __webpack_require__("./src/app/components/bought/bought.component.ts");
var logreg_component_1 = __webpack_require__("./src/app/components/logreg/logreg.component.ts");
var routes = [
    { path: "", pathMatch: 'full', component: logreg_component_1.LogregComponent },
    { path: "admin", pathMatch: 'full', component: admin_component_1.AdminComponent },
    { path: "browse", pathMatch: 'full', component: products_component_1.ProductsComponent },
    { path: "cart/:id", pathMatch: 'full', component: cart_component_1.CartComponent },
    { path: "purchase", pathMatch: 'full', component: bought_component_1.BoughtComponent },
    { path: "**", redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: 'Poiret One', cursive;\r\n    font-weight: bold;\r\n    color: #007bff; \r\n    text-align: center;\r\n    margin: 15px 0px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>MEAN SHOPPING</h1>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var products_component_1 = __webpack_require__("./src/app/components/products/products.component.ts");
var admin_component_1 = __webpack_require__("./src/app/components/admin/admin.component.ts");
var singleprod_component_1 = __webpack_require__("./src/app/components/singleprod/singleprod.component.ts");
var cart_component_1 = __webpack_require__("./src/app/components/cart/cart.component.ts");
var bought_component_1 = __webpack_require__("./src/app/components/bought/bought.component.ts");
var logreg_component_1 = __webpack_require__("./src/app/components/logreg/logreg.component.ts");
var edit_prods_component_1 = __webpack_require__("./src/app/components/edit-prods/edit-prods.component.ts");
var new_prod_component_1 = __webpack_require__("./src/app/components/new-prod/new-prod.component.ts");
var users_service_1 = __webpack_require__("./src/app/services/users.service.ts");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                products_component_1.ProductsComponent,
                admin_component_1.AdminComponent,
                singleprod_component_1.SingleprodComponent,
                cart_component_1.CartComponent,
                bought_component_1.BoughtComponent,
                logreg_component_1.LogregComponent,
                edit_prods_component_1.EditProdsComponent,
                new_prod_component_1.NewProdComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [
                users_service_1.UsersService,
                products_service_1.ProductsService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ".top {\r\n    height: 32px;\r\n    float: right;\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row links\">\n  <div class=\"col-12 d-flex justify-content-end\">  \n    <!-- <button (click)=\"browse()\" class=\"btn btn-sm btn-primary\">User View</button> -->\n    <button (click)=\"logout()\" class=\"btn btn-sm btn-primary\">Logout</button>\n  </div>\n</div>\n<app-new-prod (myNewEvent)=\"all()\"></app-new-prod>\n<app-edit-prods [AllProds]=\"products\" (myEditEvent)=\"all()\"></app-edit-prods>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var users_service_1 = __webpack_require__("./src/app/services/users.service.ts");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(route, router, pServ, uServ) {
        this.route = route;
        this.router = router;
        this.pServ = pServ;
        this.uServ = uServ;
    }
    AdminComponent.prototype.ngOnInit = function () {
        if (!this.uServ.isValid())
            this.router.navigate(["/"]);
        if (!this.uServ.isAdmin())
            this.router.navigate(["/browse"]);
        this.userId = this.uServ.session();
        this.all();
    };
    AdminComponent.prototype.all = function () {
        var _this = this;
        this.pServ.all(function (data) {
            _this.products = data;
        });
    };
    AdminComponent.prototype.logout = function () {
        this.uServ.logout();
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, products_service_1.ProductsService, users_service_1.UsersService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ "./src/app/components/bought/bought.component.css":
/***/ (function(module, exports) {

module.exports = ".links button {\r\n    margin: 5px;\r\n}\r\nh4 {\r\n    font-family: 'Poiret One', cursive;\r\n    font-weight: bold;\r\n    color: #007bff;\r\n    margin: 10px 0px;\r\n}\r\n.borders {\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n}"

/***/ }),

/***/ "./src/app/components/bought/bought.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row links\">\n  <div class=\"col-12 d-flex justify-content-end\">    \n    <button (click)=\"browse()\" class=\"btn btn-sm btn-primary\">Browse</button>\n    <button (click)=\"logout()\" class=\"btn btn-sm btn-primary\">Logout</button>\n  </div>\n</div>\n<h4>Purchase successful!</h4>\n<p>Your {{lastPurch.length}} items are on their way!</p>\n<!-- <a> Click here to see your purchase history </a> -->\n<!-- {{lastPurch}} -->\n<!-- <div *ngFor=\"let x of lastPurch\">\n  <p>item {{x.item}}</p>\n  <p>name {{x.item.name}}</p>\n  \n</div> -->\n<button (click)=\"browse()\" class=\"btn btn-sm btn-primary\">Continue Shopping</button>\n"

/***/ }),

/***/ "./src/app/components/bought/bought.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var users_service_1 = __webpack_require__("./src/app/services/users.service.ts");
var BoughtComponent = /** @class */ (function () {
    function BoughtComponent(route, router, pServ, uServ) {
        this.route = route;
        this.router = router;
        this.pServ = pServ;
        this.uServ = uServ;
    }
    BoughtComponent.prototype.ngOnInit = function () {
        if (!this.uServ.isValid())
            this.router.navigate(["/"]);
        this.userId = this.uServ.session();
        this.getHistory();
    };
    BoughtComponent.prototype.browse = function () {
        this.router.navigate(["/browse"]);
    };
    BoughtComponent.prototype.logout = function () {
        this.uServ.logout();
    };
    BoughtComponent.prototype.getHistory = function () {
        var _this = this;
        this.uServ.find(this.userId, function (data) {
            _this.history = data.history;
            console.log(data);
            // console.log(data['history'][0]);
            for (var x in data.history) {
                for (var y in data.history[x]) {
                    console.log("boo", data.history[x][y].item);
                }
            }
            _this.lastPurch = (_this.history[_this.history.length - 1]);
            // console.log("jojo", this.history);
            // console.log(this.lastPurch);
        });
    };
    BoughtComponent = __decorate([
        core_1.Component({
            selector: 'app-bought',
            template: __webpack_require__("./src/app/components/bought/bought.component.html"),
            styles: [__webpack_require__("./src/app/components/bought/bought.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, products_service_1.ProductsService, users_service_1.UsersService])
    ], BoughtComponent);
    return BoughtComponent;
}());
exports.BoughtComponent = BoughtComponent;


/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ".links button {\r\n    margin: 5px;\r\n}\r\nh6 {\r\n    font-family: 'Poiret One', cursive;\r\n    font-weight: bold;\r\n    color: #007bff;\r\n    margin: 10px 0px;\r\n}\r\n.cartItem {\r\n    margin: 10px auto;\r\n}\r\n.borders {\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n}\r\n.subtotal {\r\n    /* height: 125px; */\r\n}\r\nbutton {\r\n    margin: 10px 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row links\">\n  <div class=\"col-12 d-flex justify-content-end\">    \n    <button (click)=\"browse()\" class=\"btn btn-sm btn-primary\">Browse</button>\n    <button (click)=\"logout()\" class=\"btn btn-sm btn-primary\">Logout</button>\n  </div>\n</div>\n<div *ngIf=\"!cart\">\n  <p>Your cart is empty!</p>\n</div>\n<div class=\"row\" *ngIf=\"cart\">\n  <div *ngFor=\"let prod of cart\" class=\"col-md-9\">\n    <div class=\"row cartItem\">\n      <div class=\"thumb col-md-4\"> \n        <img src=\"{{prod.item.photosrc}}\" alt=\"Image of {{prod.item.name}}\" class=\"img-thumbnail\" (click)=\"select(prod)\">\n      </div>\n      <div class=\"col-md-6 borders\"> \n        <h6>{{prod.item.name}}</h6>\n        <p>{{prod.item.desc}} | ${{prod.item.price}}.00</p>\n        <p>Quantity: {{prod.quantity}} | Subtotal: ${{prod.item.price * prod.quantity}}.00</p>\n        <form (submit)=\"updateCart(prod)\" class=\"form-inline\"> \n          <div *ngIf=\"errors\">{{errors}}</div>\n          <input type=\"number\" name=\"quantity\" [(ngModel)]=\"cartProd.quantity\" value=\"\" required min=\"0\" max=\"{{prod.item.quantity}}\" #cartProd=\"ngModel\"/>\n          <input type=\"submit\" value=\"Change\" class=\"btn btn-sm btn-primary\"/>\n        </form>\n        <button (click)=\"drop(prod)\" class=\"btn btn-sm btn-warning\">Remove from cart</button>        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 borders subtotal\">\n    <h6>Number of Items: {{numItems}}</h6>\n    <h6>Total: ${{total}}.00</h6>\n    <button (click)=\"buy()\" class=\"btn btn-sm btn-success\">Buy</button>\n    <button (click)=\"empty()\" class=\"btn btn-sm btn-danger\">Empty My Cart</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var users_service_1 = __webpack_require__("./src/app/services/users.service.ts");
var CartComponent = /** @class */ (function () {
    function CartComponent(route, router, pServ, uServ) {
        this.route = route;
        this.router = router;
        this.pServ = pServ;
        this.uServ = uServ;
    }
    CartComponent.prototype.ngOnInit = function () {
        if (!this.uServ.isValid())
            this.router.navigate(["/"]);
        // if(this.uServ.isAdmin()) this.router.navigate(["/admin"]);
        this.userId = this.uServ.session();
        this.loadcart();
    };
    CartComponent.prototype.browse = function () {
        this.router.navigate(["/browse"]);
    };
    CartComponent.prototype.logout = function () {
        this.uServ.logout();
    };
    CartComponent.prototype.loadcart = function () {
        var _this = this;
        this.uServ.find(this.userId, function (data) {
            _this.total = 0;
            _this.numItems = 0;
            _this.cart = data.cart;
            // console.log(this.cart)
            for (var _i = 0, _a = _this.cart; _i < _a.length; _i++) {
                var x = _a[_i];
                _this.total += (x.item.price * x.quantity);
                _this.numItems += x.quantity;
            }
            console.log(_this.cart);
        });
    };
    CartComponent.prototype.drop = function (prod) {
        var _this = this;
        this.uServ.dropFromCart(prod, function (data) {
            if (data.errors) {
                console.log("comp remove err", data);
            }
            else {
                console.log("removed!");
                _this.loadcart();
            }
        });
    };
    CartComponent.prototype.empty = function () {
        var _this = this;
        this.uServ.emptyCart(this.userId, function (data) {
            if (data.errors) {
                console.log("comp empty err", data);
            }
            else {
                console.log("carted!");
                _this.loadcart();
            }
        });
    };
    CartComponent.prototype.buy = function () {
        var _this = this;
        this.uServ.purchase(this.userId, function (data) {
            if (data.errors) {
                console.log("comp add err", data);
            }
            else {
                console.log("carted!");
                _this.router.navigate(["/purchase"]);
            }
        });
    };
    CartComponent.prototype.updateCart = function (prod) {
        this.loadcart();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, products_service_1.ProductsService, users_service_1.UsersService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;


/***/ }),

/***/ "./src/app/components/edit-prods/edit-prods.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    font-family: 'Poiret One', cursive;\r\n    font-weight: bold;\r\n    color: #007bff;\r\n    margin: 10px 0px;\r\n}\r\n.edits {\r\n    margin: 10px auto;\r\n}\r\n.scrollie {\r\n    height: 400px;\r\n    overflow: auto;\r\n}\r\nimg {\r\n    display: block;\r\n    width: 230px;\r\n    height: 145px;\r\n    -webkit-transition: .5s ease;\r\n    transition: .5s ease;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n.thumb {\r\n    /* vertical-align: middle; */\r\n    top: 7px;\r\n}"

/***/ }),

/***/ "./src/app/components/edit-prods/edit-prods.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"row\">Edit Products</h3>\n  <div class=\"scrollie\">\n    <div *ngFor=\"let prod of AllProds\">\n      <div class=\"row edits\">\n        <div class=\"col-md-3 thumb\">\n          <img src=\"{{prod.photosrc}}\" alt=\"Image of {{prod.name}}\" class=\"img-thumbnail\" (click)=\"select(prod)\">\n        </div>\n        <form (submit)=\"edit(prod)\" class=\"form-control form-inline col-md-8\">\n          <div *ngIf=\"errors\">{{errors}}</div>\n          <div class=\"col-md-4\">    \n            <p>Name: </p> \n            <input type=\"text\" name=\"name\" [(ngModel)]=\"prod.name\" required minlength=\"3\" maxlength=\"255\" #prodname=\"ngModel\" value=\"prod.name\">\n            <p>Photo Source: </p>\n            <input type=\"text\" name=\"photosrc\" [(ngModel)]=\"prod.photosrc\" required minlength=\"3\" maxlength=\"255\" #prodsrc=\"ngModel\" value=\"prod.photosrc\">\n          </div>\n          <div class=\"col-md-3\">\n            <p># In Inventory: </p>\n            <input type=\"number\" name=\"inventory\" [(ngModel)]=\"prod.inventory\" value=\"0\" required min=\"0\" max=\"300\" #prodquant=\"ngModel\" value=\"prod.inventory\">\n            <p>Price: </p>\n            <input type=\"number\" name=\"price\" [(ngModel)]=\"prod.price\" value=\"0.00\" max=\"1000000\" required min=\"0\" #prodprice=\"ngModel\" value=\"prod.price\">  \n          </div>\n          <div class=\"col-md-5\">\n            <p>Description: </p>\n            <textarea name=\"desc\" [(ngModel)]=\"prod.desc\" required minlength=\"3\" maxlength=\"255\" #proddesc=\"ngModel\" value=\"prod.desc\"></textarea>  \n            <br>\n              <input type=\"submit\" value=\"Edit product\" class=\"btn btn-sm btn-primary\"/>\n          </div>\n        </form>\n        <button (click)=\"delete(prod)\" class=\"btn btn-sm btn-danger\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-prods/edit-prods.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var EditProdsComponent = /** @class */ (function () {
    function EditProdsComponent(pServ) {
        this.pServ = pServ;
        this.myEditEvent = new core_1.EventEmitter();
    }
    EditProdsComponent.prototype.ngOnInit = function () {
    };
    EditProdsComponent.prototype.edit = function (prod) {
        var _this = this;
        this.pServ.update(prod, function (data) {
            if (data.errors) {
                // this.editProd = { name: this.editProd.name, desc: this.editProd.desc, photosrc: this.editProd.photosrc, quantity: this.editProd.quantity, price: this.editProd.price };
                _this.errors = data.errors;
                console.log(data);
            }
            else {
                _this.myEditEvent.emit(data);
            }
        });
    };
    EditProdsComponent.prototype.delete = function (prod) {
        var _this = this;
        this.pServ.destroy(prod, function (data) {
            if (data.errors) {
                _this.errors = data.errors;
            }
            else {
                _this.myEditEvent.emit(data);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditProdsComponent.prototype, "AllProds", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EditProdsComponent.prototype, "myEditEvent", void 0);
    EditProdsComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-prods',
            template: __webpack_require__("./src/app/components/edit-prods/edit-prods.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-prods/edit-prods.component.css")]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService])
    ], EditProdsComponent);
    return EditProdsComponent;
}());
exports.EditProdsComponent = EditProdsComponent;


/***/ }),

/***/ "./src/app/components/logreg/logreg.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    font-family: 'Poiret One', cursive;\r\n    font-weight: bold;\r\n    color: #007bff; \r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/logreg/logreg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2>Register</h2>\n      <div *ngIf=\"regerrs\">\n        <ul *ngFor=\"let err of regerrs\">\n          <li>{{err}}</li>\n        </ul>\n      </div>\n      <form (submit)=\"register()\"  class=\"form-group\">\n          <div>First Name: \n            <div class=\"alert alert-danger\" *ngIf=\"regfirst.invalid && regfirst.touched\">First name is required and must be between 3 and 255 characters</div>\n            <input name=\"first\" class=\"form-control\" [(ngModel)]=\"regging.first\" required minlength=\"3\" maxlength=\"255\" #regfirst=\"ngModel\"></div>\n          <div>Last Name: \n            <div class=\"alert alert-danger\" *ngIf=\"reglast.invalid && reglast.touched\">Last name is required and must be between 3 and 255 characters</div>\n            <input name=\"last\" class=\"form-control\" [(ngModel)]=\"regging.last\" required minlength=\"3\" maxlength=\"255\" #reglast=\"ngModel\"></div>\n          <div>Email: \n            <div class=\"alert alert-danger\" *ngIf=\"regemail.invalid && regemail.touched\">Email is required and must be between 3 and 255 characters</div>\n            <input name=\"email\" class=\"form-control\" [(ngModel)]=\"regging.email\" required minlength=\"3\" maxlength=\"255\" #regemail=\"ngModel\"></div> \n          <div>Password: \n            <div class=\"alert alert-danger\" *ngIf=\"regpassword.invalid && regpassword.touched\">Password must have at least 1 number, 1 uppercase letter, 1 special character, and be between 8 and 32 characters long</div>\n            <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"regging.password\" required minlength=\"3\" maxlength=\"255\" #regpassword=\"ngModel\"></div> \n          <div>Confirm Password: \n            <div class=\"alert alert-danger\" *ngIf=\"regconfirm.invalid && regconfirm.touched\">Confirmation password must have at least 1 number, 1 uppercase letter, 1 special character, and be between 8 and 32 characters long</div>\n            <input type=\"password\" name=\"confirm\" class=\"form-control\" [(ngModel)]=\"regging.confirm\" required minlength=\"3\" maxlength=\"255\" #regconfirm=\"ngModel\"></div> \n          <br>\n          <input type=\"submit\" value=\"Register\" class=\"form-control btn btn-primary\"/>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n        <h2>Login</h2>\n        <div *ngIf=\"logerrs\" class=\"alert alert-danger\">\n          <p>{{logerrs}}</p>\n        </div>\n        <form (submit)=\"login()\" class=\"form-group\">\n          <div>Email: \n            <div class=\"alert alert-danger\" *ngIf=\"logemail.invalid && logemail.touched\">Email is required and must be between 3 and 255 characters</div>\n            <input name=\"email\" class=\"form-control\" [(ngModel)]=\"logging.email\" required minlength=\"3\" maxlength=\"255\" #logemail=\"ngModel\"></div> \n          <div>Password: \n            <div class=\"alert alert-danger\" *ngIf=\"logpassword.invalid && logpassword.touched\">Password must have at least 1 number, 1 uppercase letter, 1 special character, and be between 8 and 32 characters long</div>\n            <input name=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"logging.password\" required minlength=\"3\" maxlength=\"255\" #logpassword=\"ngModel\"></div> \n          <br>\n          <input type=\"submit\" value=\"Login\" class=\"form-control btn btn-primary\"/>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/logreg/logreg.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var users_service_1 = __webpack_require__("./src/app/services/users.service.ts");
var LogregComponent = /** @class */ (function () {
    function LogregComponent(uServ, router) {
        this.uServ = uServ;
        this.router = router;
    }
    LogregComponent.prototype.ngOnInit = function () {
        this.regging = {
            first: "",
            last: "",
            email: "",
            password: "",
            confirm: ""
        };
        this.logging = {
            email: "",
            password: ""
        };
        this.uServ.logout();
    };
    LogregComponent.prototype.register = function () {
        var _this = this;
        this.uServ.register(this.regging, (function (data) {
            if (data.errors) {
                console.log("reg err", data.errors);
                _this.regerrs = data.errors;
            }
            else {
                _this.regging = {
                    first: "",
                    last: "",
                    email: "",
                    password: "",
                    confirm: ""
                };
                localStorage.setItem("userId", data._id);
                localStorage.setItem("admin", data.admin);
                if (data.admin == true) {
                    _this.router.navigate(["/admin"]);
                }
                else {
                    _this.router.navigate(["/products"]);
                }
            }
        }));
    };
    LogregComponent.prototype.login = function () {
        var _this = this;
        this.uServ.login(this.logging, (function (data) {
            if (data.errors) {
                console.log("log err", data.errors);
                _this.logerrs = data.errors;
            }
            else {
                _this.logging = {
                    email: "",
                    password: ""
                };
                localStorage.setItem("userId", data._id);
                localStorage.setItem("admin", data.admin);
                if (data.admin == true) {
                    _this.router.navigate(["/admin"]);
                }
                else {
                    _this.router.navigate(["/browse"]);
                }
            }
        }));
    };
    LogregComponent = __decorate([
        core_1.Component({
            selector: 'app-logreg',
            template: __webpack_require__("./src/app/components/logreg/logreg.component.html"),
            styles: [__webpack_require__("./src/app/components/logreg/logreg.component.css")]
        }),
        __metadata("design:paramtypes", [users_service_1.UsersService, router_1.Router])
    ], LogregComponent);
    return LogregComponent;
}());
exports.LogregComponent = LogregComponent;


/***/ }),

/***/ "./src/app/components/new-prod/new-prod.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    font-family: 'Poiret One', cursive;\r\n    font-weight: bold;\r\n    color: #007bff;\r\n    margin: 10px 0px;\r\n}\r\n.prodforms {\r\n    margin: 10px auto;  \r\n}"

/***/ }),

/***/ "./src/app/components/new-prod/new-prod.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"row\">New Product</h3>\n  <div class=\"row\">\n    <div class=\"alert alert-danger\" *ngIf=\"prodname.invalid && prodname.touched\">Name of product is required and must be between 3 and 255 characters</div>\n    <div class=\"alert alert-danger\" *ngIf=\"proddesc.invalid && proddesc.touched\">Description of product is required and must be between 3 and 255 characters</div>\n    <div class=\"alert alert-danger\" *ngIf=\"prodsrc.invalid && prodsrc.touched\">Photo source of product is required and must be between 3 and 255 characters</div>\n    <div class=\"alert alert-danger\" *ngIf=\"prodinventory.invalid && prodinventory.touched\">Maximum product inventory quantity is 300.</div>\n    <div class=\"alert alert-danger\" *ngIf=\"prodprice.invalid && prodprice.touched\">Product price required, maximum $1,000,000.00.</div>\n  </div>\n  <div class=\"row prodforms\"> \n    <form (submit)=\"create()\" class=\"form-control form-inline\">\n      <div class=\"col-md-4\">\n        <p>Name: </p> \n        <input type=\"text\" name=\"name\" [(ngModel)]=\"newProd.name\" required minlength=\"3\" maxlength=\"255\" #prodname=\"ngModel\">\n        <p>Photo Source: </p>\n        <input type=\"text\" name=\"photosrc\" [(ngModel)]=\"newProd.photosrc\" required minlength=\"3\" maxlength=\"255\" #prodsrc=\"ngModel\">\n      </div>\n      <div class=\"col-md-4\">\n        <p># in Inventory: </p>\n        <input type=\"number\" name=\"inventory\" [(ngModel)]=\"newProd.inventory\" value=\"0\" required min=\"0\" max=\"300\" #prodinventory=\"ngModel\">\n        <p>Price: </p>\n        <input type=\"number\" name=\"price\" [(ngModel)]=\"newProd.price\" value=\"0\"  required min=\"0\" max=\"1000000\" #prodprice=\"ngModel\">  \n      </div>\n      <div class=\"col-md-4\">\n        <p>Description: </p>\n        <textarea name=\"desc\" [(ngModel)]=\"newProd.desc\" required minlength=\"3\" maxlength=\"255\" #proddesc=\"ngModel\"></textarea>  \n        <p><input type=\"submit\" value=\"Add product\" class=\"btn btn-sm btn-primary\"></p>    \n      </div>\n    </form>\n  </div> \n</div>\n"

/***/ }),

/***/ "./src/app/components/new-prod/new-prod.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var NewProdComponent = /** @class */ (function () {
    function NewProdComponent(pServ) {
        this.pServ = pServ;
        this.myNewEvent = new core_1.EventEmitter();
    }
    NewProdComponent.prototype.ngOnInit = function () {
        this.newProd = {
            name: "",
            desc: "",
            photosrc: "",
            inventory: 0,
            price: 0
        };
    };
    NewProdComponent.prototype.create = function () {
        var _this = this;
        this.pServ.create(this.newProd, function (data) {
            if (data.errors) {
                // this.newProd = { name: this.newProd.name, type: this.newProd.type, desc: this.newProd.desc, skills: this.newProd.skills };
                _this.errors = data.errors;
                console.log(data.errors);
            }
            else {
                _this.newProd = {
                    name: "",
                    desc: "",
                    photosrc: "",
                    inventory: 0,
                    price: 0
                };
                _this.myNewEvent.emit(data);
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NewProdComponent.prototype, "myNewEvent", void 0);
    NewProdComponent = __decorate([
        core_1.Component({
            selector: 'app-new-prod',
            template: __webpack_require__("./src/app/components/new-prod/new-prod.component.html"),
            styles: [__webpack_require__("./src/app/components/new-prod/new-prod.component.css")]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService])
    ], NewProdComponent);
    return NewProdComponent;
}());
exports.NewProdComponent = NewProdComponent;


/***/ }),

/***/ "./src/app/components/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ".links button {\r\n    margin: 5px;\r\n}\r\n.prods {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n.wrapper {\r\n    width: 230px;\r\n    height: 145px;\r\n    margin: 10px 10px;\r\n    display: block;\r\n}\r\nimg {\r\n    opacity: 1;\r\n    width: 230px;\r\n    height: 145px;\r\n    -webkit-transition: .5s ease;\r\n    transition: .5s ease;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n.wrapper:hover {\r\n    opacity: 0.3;\r\n}\r\n.prodname {\r\n    opacity: 1;\r\n    font-size: 12px;\r\n    margin: 5px auto; \r\n    text-align: center;\r\n}\r\n.scrollie {\r\n    height: 400px;\r\n    overflow: auto;\r\n}\r\n::-webkit-scrollbar {\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row links\">\n    <div class=\"col-12 d-flex justify-content-end\">    \n      <button (click)=\"cart()\" class=\"btn btn-sm btn-primary\">Your Shopping Cart</button>\n      <button (click)=\"logout()\" class=\"btn btn-sm btn-primary\">Logout</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"prods col-md-10 scrollie\">\n      <div *ngFor=\"let prod of products\" class=\"row\">\n        <div class=\"wrapper\">\n          <img src=\"{{prod.photosrc}}\" alt=\"Image of {{prod.name}}\" class=\"img-thumbnail\" (click)=\"select(prod)\">\n          <!-- <div class=\"prodname\">{{prod.name}}</div> -->\n        </div> \n      </div>\n    </div>\n    <div *ngIf=\"selectprod\" class=\"col-md-2\">\n      <app-singleprod [userId]=\"userId\" [selected]=\"selected\" (myCartEvent)=\"all()\" (myCart2Event)=\"unselect()\"></app-singleprod>\n    </div> \n    <div *ngIf=\"!selectprod && bought\" class=\"col-md-2\">\n      <div class=\"alert alert-success small\">Successfully added to cart!</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var users_service_1 = __webpack_require__("./src/app/services/users.service.ts");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, router, pServ, uServ) {
        this.route = route;
        this.router = router;
        this.pServ = pServ;
        this.uServ = uServ;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        if (!this.uServ.isValid())
            this.router.navigate(["/"]);
        // if(this.uServ.isAdmin()) this.router.navigate(["/admin"]);
        this.userId = this.uServ.session();
        // console.log(this.userId)
        this.all();
        this.bought = false;
    };
    ProductsComponent.prototype.all = function () {
        var _this = this;
        this.pServ.all(function (data) {
            _this.products = data;
        });
    };
    ProductsComponent.prototype.cart = function () {
        this.router.navigate(["/cart/" + this.userId]);
    };
    ProductsComponent.prototype.logout = function () {
        this.uServ.logout();
    };
    ProductsComponent.prototype.select = function (prod) {
        this.selectprod = true;
        this.bought = false;
        this.selected = prod;
    };
    ProductsComponent.prototype.unselect = function () {
        this.selectprod = false;
        this.bought = true;
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.bought = false;
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            template: __webpack_require__("./src/app/components/products/products.component.html"),
            styles: [__webpack_require__("./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, products_service_1.ProductsService, users_service_1.UsersService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;


/***/ }),

/***/ "./src/app/components/singleprod/singleprod.component.css":
/***/ (function(module, exports) {

module.exports = "h6 {\r\n    font-family: 'Poiret One', cursive;\r\n    font-weight: bold;\r\n    color: #007bff;\r\n    margin: 10px 0px;\r\n}\r\n.show {\r\n    margin: 10px auto;\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/components/singleprod/singleprod.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row show\">\n  <div class=\"thumb\">\n    <img src=\"{{selected.photosrc}}\" alt=\"Image of {{selected.name}}\" class=\"img-thumbnail\" (click)=\"select(selected)\">\n  </div>\n  <div>\n    <h6>{{selected.name}}</h6>\n    <p>{{selected.desc}}</p>\n  </div>\n  <!-- <form (submit)=\"addToCart()\" class=\"form-control\"> -->\n  <form (submit)=\"addToCart(addProd)\" class=\"form-control\">\n      <div *ngIf=\"errors\">{{errors}}</div>\n    <p>{{selected.inventory}} in stock</p>\n    <input type=\"number\" name=\"quantity\" [(ngModel)]=\"addProd.quantity\" value=\"1\" required min=\"1\" max=\"{{selected.inventory}}\" #addProd=\"ngModel\"/>\n    <br><br>\n    <input type=\"submit\" value=\"Add to Cart\" class=\"btn btn-sm btn-primary\"/>\n  </form>\n</div>\n<!-- {{addProd.quantity}} -->"

/***/ }),

/***/ "./src/app/components/singleprod/singleprod.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var users_service_1 = __webpack_require__("./src/app/services/users.service.ts");
var SingleprodComponent = /** @class */ (function () {
    function SingleprodComponent(pServ, uServ) {
        this.pServ = pServ;
        this.uServ = uServ;
        this.myCartEvent = new core_1.EventEmitter();
        this.myCart2Event = new core_1.EventEmitter();
        this.addProd = {
            prodId: 0,
            quantity: 1
        };
    }
    SingleprodComponent.prototype.ngOnInit = function () {
        this.addProd = {
            prodId: this.selected._id,
            quantity: 1
        };
    };
    SingleprodComponent.prototype.addToCart = function (buying) {
        var _this = this;
        // console.log("add to cart buying", buying)
        // console.log("add to cart quant", buying.quantity)
        this.addProd.quantity = buying.quantity;
        console.log("add to cart addprod", this.addProd);
        // console.log("the item", this.selected._id)
        this.uServ.addToCart(this.addProd, function (data) {
            if (data.errors) {
                console.log("comp add err", data);
            }
            else {
                console.log("carted!");
                _this.myCartEvent.emit(data);
                _this.myCart2Event.emit(data);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SingleprodComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SingleprodComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SingleprodComponent.prototype, "myCartEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SingleprodComponent.prototype, "myCart2Event", void 0);
    SingleprodComponent = __decorate([
        core_1.Component({
            selector: 'app-singleprod',
            template: __webpack_require__("./src/app/components/singleprod/singleprod.component.html"),
            styles: [__webpack_require__("./src/app/components/singleprod/singleprod.component.css")]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService, users_service_1.UsersService])
    ], SingleprodComponent);
    return SingleprodComponent;
}());
exports.SingleprodComponent = SingleprodComponent;


/***/ }),

/***/ "./src/app/services/products.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.all = function (cb) {
        this.http.get("/products")
            .subscribe(function (data) { return cb(data); });
    };
    ProductsService.prototype.create = function (prod, cb) {
        this.http.post("/products", prod)
            .subscribe(function (data) { return cb(data); });
    };
    ProductsService.prototype.find = function (id, cb) {
        this.http.get("/products/" + id)
            .subscribe(function (data) { return cb(data); });
    };
    ProductsService.prototype.update = function (prod, cb) {
        this.http.put("/products/" + prod._id, prod)
            .subscribe(function (data) { return cb(data); });
    };
    ProductsService.prototype.destroy = function (prod, cb) {
        this.http.delete("/products/" + prod._id)
            .subscribe(function (data) { return cb(data); });
    };
    ProductsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;


/***/ }),

/***/ "./src/app/services/users.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
    }
    UsersService.prototype.register = function (user, cb) {
        this.http.post("/register", user)
            .subscribe(function (data) { return cb(data); });
    };
    UsersService.prototype.login = function (user, cb) {
        this.http.post("/login", user)
            .subscribe(function (data) { return cb(data); });
    };
    UsersService.prototype.logout = function () {
        localStorage.setItem("userId", undefined);
        localStorage.setItem("admin", undefined);
        this.router.navigate(["/"]);
    };
    UsersService.prototype.isValid = function () {
        return localStorage.getItem("userId") != undefined; // returns if T/F if userId exists in session
    };
    UsersService.prototype.isAdmin = function () {
        return localStorage.getItem("admin"); // returns T/F if admin
    };
    UsersService.prototype.session = function () {
        return localStorage.getItem("userId");
    };
    UsersService.prototype.find = function (id, cb) {
        this.http.get("/users/" + id)
            .subscribe(function (data) { return cb(data); });
    };
    // findHist(id, cb) { // get user and populates on product id inside history cart arrays
    //   this.http.get("/users/history/"+id)
    //   .subscribe(data=>cb(data));
    // }
    UsersService.prototype.addToCart = function (addProd, cb) {
        var id = localStorage.getItem("userId");
        this.http.put("/users/cart/" + id, addProd)
            .subscribe(function (data) { return cb(data); });
    };
    UsersService.prototype.dropFromCart = function (prod, cb) {
        var id = localStorage.getItem("userId");
        this.http.put("/users/drop/" + id, prod)
            .subscribe(function (data) { return cb(data); });
    };
    UsersService.prototype.emptyCart = function (id, cb) {
        this.http.put("/users/empty/" + id, id)
            .subscribe(function (data) { return cb(data); });
    };
    UsersService.prototype.purchase = function (id, cb) {
        this.http.put("/users/" + id, id)
            .subscribe(function (data) { return cb(data); });
    };
    UsersService.prototype.updateCart = function (prod, cb) {
        var id = localStorage.getItem("userId");
        this.http.put("/users/update/" + id, prod)
            .subscribe(function (data) { return cb(data); });
    };
    UsersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map