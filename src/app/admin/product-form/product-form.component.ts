import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  
  productObj:Product=new Product();
  product:Product={};
  paramId;
  selectCategories:any;

  constructor(private productService:ProductService,private authService:AuthService,private route:Router,private activatedRouter:ActivatedRoute,private categoryService:CategoryService) { 
    /*if(!authService.isAdmin()){
      this.route.navigate(["admin/admin-login"]);
  }*/
  //AdminGuard is specified to implement this functionality
    this.paramId=this.activatedRouter.snapshot.paramMap.get('id');
     if(this.paramId)
     {
       this.productService.getSingleProduct(+this.paramId).subscribe(res=>this.product=res);
     }
  }
  
  ngOnInit(): void {
    this.getCat();
  }
  addNewProduct(form:NgForm){
    
    this.productObj.productName=form.value.productName;
    this.productObj.productImage=form.value.productImage;
    this.productObj.productDescription=form.value.productDescription;
    this.productObj.productCategory=form.value.productCategory;
    this.productObj.productSeller=form.value.productSeller;
    this.productObj.productPrice=form.value.productPrice;
    if(this.paramId){
      this.productObj.id=+this.paramId;
      this.productService.updateProduct(this.productObj,+this.paramId).subscribe(res=>{
        alert("Product updated successfully");
        this.route.navigate(["/admin/products"]);
      },
      err=>{console.log(err)});
    }
    else{
      this.productService.addProduct(this.productObj).subscribe(
        res => {    
      console.log(res);
      alert("New Product added successfully");
      this.route.navigate(["/admin/products"])
        },
        err => { console.log(err); }
      );

      }
    }
    getCat(){
   
      this.categoryService.getAllCategories().subscribe(res=>{
        this.selectCategories=res;
      })
    }

}
