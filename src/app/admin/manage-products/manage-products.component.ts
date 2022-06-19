import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  Products:any;
  filteredProducts:any;
  
  

  constructor(private productsService:ProductService,private authService:AuthService,private route:Router) {
    /*if(!authService.isAdmin()){
      this.route.navigate(["admin/admin-login"]);
  }*/
  //AdminGuard is specified to implement this functionality
   }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
   
    this.productsService.getAllProducts().subscribe(res=>{
      this.Products=this.filteredProducts=res;
    })
  }
  delete(i:number){
    
    let res=confirm("Are you sure you want to delete this product?");
    if(res){
      
    this.productsService.deleteProduct(i).subscribe(res=>
      { this.getProducts();
        alert("Product Deleted");
    })
  }

}
search(query:string){
  //console.log(query);
  this.filteredProducts=(query)? this.Products.filter((p:any)=>p.productName.toLowerCase().includes(query.toLowerCase())):this.Products;
}

}
