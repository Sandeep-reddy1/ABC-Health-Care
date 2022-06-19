import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageProductsComponent,
    ProductFormComponent,
    AdminNavbarComponent,
    ManageCategoriesComponent,
    CategoryFormComponent,
    LoginComponent,
    SignupComponent,
    AdminLoginComponent,
    ManageUsersComponent,
    HomeComponent,
    NavbarComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
