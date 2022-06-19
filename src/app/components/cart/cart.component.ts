import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartArray:Array<Cart>=[];
  filterByEmailCart:Array<Cart>=[];
 
  constructor(private cartService:CartService,private route:Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(){
    this.cartService.getCart().subscribe(res=>{
      this.cartArray=res;
      this.filterByEmailCart=this.cartArray.filter((p:any)=>p.userEmailId===localStorage['email']);
      /*console.log(localStorage['email']);
      console.log(this.cartArray);
      console.log(this.filterByEmailCart);*/
    })
    
    
  }
  getTotalItems(){
    return (this.filterByEmailCart.length).toString();
  }
 
  save(i:number){
    let data:Cart=new Cart();
    data.id=this.filterByEmailCart[i].id;
    data.userEmailId=localStorage['email'];
    data.cartProductId=this.filterByEmailCart[i].cartProductId;
    data.cartProductName=this.filterByEmailCart[i].cartProductName;
    data.cartProductImage=this.filterByEmailCart[i].cartProductImage;
    data.cartProductPrice=this.filterByEmailCart[i].cartProductPrice;
    data.cartProductQuantity=this.filterByEmailCart[i].cartProductQuantity;
    this.cartService.updateQuantity(data,this.filterByEmailCart[i].id).subscribe(res=>{
      console.log("Product updated successfully");
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['shopping-cart']);
    },
    err=>{console.log(err)});

    
  }
  delete(i:number){
    console.log('delete: ', this.filterByEmailCart[i].id)
    this.cartService.deleteProduct(this.filterByEmailCart[i].id).subscribe(res=>{
      console.log("Removed product from cart");
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['shopping-cart']);
     
    },
      err=>{console.log(err)});

  }

}
