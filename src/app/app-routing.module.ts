import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminComponent } from './admin/admin.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'userlogin',pathMatch:'full'},
  {path:'userlogin',component:UserloginComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'vendorlogin',component:VendorloginComponent},
  {path:'addvendor',component:AddvendorComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path: 'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
