import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';
import { Order } from 'src/app/interfaces/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutCartArray:Array<Cart>=[];
  filterCheckout:Array<Cart>=[];
  checkOutObservable: Subscription;
  today=new Date();
  
  
  constructor(private cartService:CartService,private orderService:OrderService,private route:Router) { }
  
  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(){
    this.checkOutObservable=this.cartService.getCart().subscribe(res=>{
      this.checkoutCartArray=res;
      this.filterCheckout=this.checkoutCartArray.filter((p:any)=>p.userEmailId===localStorage['email'])
      
     

    });
      


  }
 getTotalPrice(){
    let totalPrice=0;
    let i:number;
    for(i=0;i<this.filterCheckout.length;i++)
    {

        
        let prod=(this.filterCheckout[i].cartProductQuantity || 0)*(this.filterCheckout[i].cartProductPrice || 0);
        totalPrice=totalPrice+prod;
        
    }
    
    return totalPrice.toString();
    
  }
  ngOnDestroy() {
    this.checkOutObservable.unsubscribe()
  }
  addOrder(form:NgForm){
    let i:number;
    for(i=0;i<this.filterCheckout.length;i++){
      let data:Order = {
        address:form.value.address,
        phoneNumber:form.value.phoneNumber,
        userEmailId:localStorage['email'],
        orderProductId:this.filterCheckout[i].cartProductId,
        orderProductName: this.filterCheckout[i].cartProductName,
        orderProductImage: this.filterCheckout[i].cartProductImage,
        orderProductPrice: this.filterCheckout[i].cartProductPrice,
        orderProductQuantity:this.filterCheckout[i].cartProductQuantity,
        orderProductDateTime:formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530')
      }
      console.log(data);
      this.orderService.addOrder(data).subscribe(res=>{
        console.log("order Added successfully");
      },
      err=>{console.log(err);})

    }
    let n=this.filterCheckout.length;
    for(let i=0;i<n;i++)
    {
        this.cartService.deleteProduct(this.filterCheckout[i].id).subscribe(res=>{
          console.log("Cart deleted successfully");
        },
        err=>{console.log("cart delete failed");});
    }
    this.route.navigate(['order-success']);
    


  }

}
