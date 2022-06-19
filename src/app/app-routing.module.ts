import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin/admin-guard.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'product-details/:id',component:ProductDetailsComponent},
{path:'shopping-cart',component:CartComponent,canActivate:[AuthGuard]},
{path:'check-out',component:CheckoutComponent,canActivate:[AuthGuard]},
{path:'order-success',component:OrderSuccessComponent,canActivate:[AuthGuard]},
{path:'my-orders',component:MyOrdersComponent,canActivate:[AuthGuard]},

//admin
{path:'admin/admin-login',component:AdminLoginComponent},
{path:'admin/products',component:ManageProductsComponent,canActivate:[AdminGuardGuard]},
{path:'admin/products/new',component:ProductFormComponent,canActivate:[AdminGuardGuard]},
{path:'admin/products/:id',component:ProductFormComponent,canActivate:[AdminGuardGuard]},
{path:'admin/categories',component:ManageCategoriesComponent,canActivate:[AdminGuardGuard]},
{path:'admin/categories/new',component:CategoryFormComponent,canActivate:[AdminGuardGuard]},
{path:'admin/categories/:id',component:CategoryFormComponent,canActivate:[AdminGuardGuard]},
{path:'admin/users',component:ManageUsersComponent,canActivate:[AdminGuardGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
