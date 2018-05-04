import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { SingleprodComponent } from './components/singleprod/singleprod.component';
import { CartComponent } from './components/cart/cart.component';
import { BoughtComponent } from './components/bought/bought.component';
import { LogregComponent } from './components/logreg/logreg.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: LogregComponent },
  { path: "admin", pathMatch: 'full', component: AdminComponent },
  { path: "browse", pathMatch: 'full', component: ProductsComponent },
  { path: "cart/:id", pathMatch: 'full', component: CartComponent },
  { path: "purchase", pathMatch: 'full', component: BoughtComponent },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
