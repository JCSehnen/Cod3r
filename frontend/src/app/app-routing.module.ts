import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'
import {TesteComponent} from './views/teste/teste.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "products",
    component: ProductCrudComponent
  },{
   path:"products/product-create",
   component: ProductCreateComponent
    
    
  },{
    path:"teste",
    component: TesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
