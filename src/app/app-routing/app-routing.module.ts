import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { ProductsComponent } from './products/products.component';
// import { AuthGuardGuard } from './auth/auth-guard.guard';
// import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  // {path : 'Register', component : RegisterComponent},
  // {path : 'Login', component : LoginComponent},
  // {path : 'Products', component: ProductsComponent, canActivate: [AuthGuardGuard]},
  // {path : 'Add-Products', component: AddProductComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
