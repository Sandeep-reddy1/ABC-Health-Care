import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {

  Categories:any;
  filteredCategories:any;
  
  

  constructor(private categoriesService:CategoryService,private authService:AuthService,private route:Router) {
    /*if(!authService.isAdmin()){
      this.route.navigate(["admin/admin-login"]);
  }*/
  //AdminGuard is specified to implement this functionality
   }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
   
    this.categoriesService.getAllCategories().subscribe(res=>{
      this.Categories=this.filteredCategories=res;
    })
  }
  delete(i:number){
    
    let res=confirm("Are you sure you want to delete this Category?");
    if(res){
      
    this.categoriesService.deleteCategory(i).subscribe(res=>
      { this.getCategories();
        alert("Category Deleted");
    })
  }

}
search(query:string){
  //console.log(query);
  this.filteredCategories=(query)? this.Categories.filter((p:any)=>p.categoryName.toLowerCase().includes(query.toLowerCase())):this.Categories;
}

}
