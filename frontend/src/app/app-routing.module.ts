
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'
import {TesteComponent} from './views/teste/teste.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
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
   path:"products/product-update/:id", //inserindo : ele espera um parametro
   component: ProductUpdateComponent
    
    
  },{
    path:"products/product-delete/:id", //inserindo : ele espera um parametro
    component: ProductDeleteComponent
     
     
   },{
    path:"products/update/:id",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
