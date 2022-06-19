import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails:Product;
  paramId:string|null;
  add: number = -1;// for view qte & buy button
  constructor(private productService:ProductService,private cartService:CartService, private activatedRouter:ActivatedRoute,private authSer:AuthService,private route:Router) { }

  ngOnInit(): void {
    //this.getProductDetails(this.productService.requiredProductDetailId);
    this.paramId=this.activatedRouter.snapshot.paramMap.get('id');
     if(this.paramId)
     {
       this.productService.getSingleProduct(+this.paramId).subscribe(res=>this.productDetails=res);
     }
  }
  setQuantity(index:any){
    if(this.authSer.isUserLoggedIn()){
      console.log("Authenticated user");
      this.add = index;
      
    }
    else{
      this.route.navigate(["login"]);
    }

  }
  addToCart(amount:string){
    let selectedProduct = this.productDetails;
    let data:Cart = {
      userEmailId:localStorage['email'],
      cartProductId: selectedProduct.id,
      cartProductImage:selectedProduct.productImage,
      cartProductName:selectedProduct.productName,
      cartProductPrice:selectedProduct.productPrice,
      cartProductQuantity: +amount,
    }
    this.cartService.addToCart(data).subscribe((res:any)=>{
      alert("Product added to Cart");
      this.add = -1;
      this.route.navigate(["home"]);
    },
    (err:any)=>{console.log(err)});

  }
  

}
