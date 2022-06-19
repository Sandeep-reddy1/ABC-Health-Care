import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories:any;
  activeCategory:string="All";
  productsHome:Array<Product>=[];
  filteredProductsHome:Array<Product>=[];
  searchfilteredProductsHome:Array<Product>=[];
  add: number = -1;
  constructor(private categoryService:CategoryService,private productsService:ProductService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage['email']===undefined || localStorage['email']===null || localStorage['email']===""){
      localStorage['email']="";
      console.log(localStorage['email']);
    }
    
    this.getCat();
    this.getProductsHome();
  }
  getCat(){
   
    this.categoryService.getAllCategories().subscribe(res=>{
      this.categories=res;
    })
  }
  getProductsHome(){
   
    this.productsService.getAllProducts().subscribe(res=>{
      this.productsHome=this.filteredProductsHome=this.searchfilteredProductsHome=res;
    })
   
  }
  
  searchHome(query:string){
    this.activeCategory=query;
    console.log(query);
    if(query!="All"){
      this.searchfilteredProductsHome=this.filteredProductsHome=(query)? this.productsHome.filter((p:any)=>p.productCategory.toLowerCase().includes(query.toLowerCase())):this.productsHome;
    }
    else
    {
      this.searchfilteredProductsHome=this.filteredProductsHome=this.productsHome;
    }
    

  }
  searchFor(input:string){
    if(input!==""){
      this.searchfilteredProductsHome=(input)? this.filteredProductsHome.filter((p:any)=>p.productName.toLowerCase().includes(input.toLowerCase())):this.filteredProductsHome;
    }
    else
    {
      this.searchfilteredProductsHome=this.filteredProductsHome;
    }
  }
  sortByName(){
    this.searchfilteredProductsHome.sort((a,b) => ((a.productName?.toLowerCase() || "") > (b.productName?.toLowerCase() || "")) ? 1 : ((b.productName?.toLowerCase() || "") > (a.productName?.toLowerCase() || "") ? -1 : 0));
    
  }
  sortByCategory(){
    this.searchfilteredProductsHome.sort((a,b) => ((a.productCategory?.toLowerCase() || "") > (b.productCategory?.toLowerCase() || "")) ? 1 : ((b.productCategory?.toLowerCase() || "") > (a.productCategory?.toLowerCase() || "") ? -1 : 0));
  }
  
  

}
