import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  categoryObj:Category=new Category();
  category:Category={};
  paramId;

  constructor(private categoryService:CategoryService,private route:Router,private activatedRouter:ActivatedRoute,private authService:AuthService) { 
    /*if(!authService.isAdmin()){
      this.route.navigate(["admin/admin-login"]);
  }*/
  //AdminGuard is specified to implement this functionality
    this.paramId=this.activatedRouter.snapshot.paramMap.get('id');
     if(this.paramId)
     {
       this.categoryService.getSingleCategory(+this.paramId).subscribe(res=>this.category=res);
     }
  }
  
  ngOnInit(): void {
    
     
  }
  addNewCategory(form:NgForm){
    
    this.categoryObj.categoryName=form.value.categoryName;
    if(this.paramId){
      this.categoryObj.id=+this.paramId;
      this.categoryService.updateCategory(this.categoryObj,+this.paramId).subscribe(res=>{
        alert("Category updated successfully");
        this.route.navigate(["/admin/categories"]);
      },
      err=>{console.log(err)});
    }
    else{
      this.categoryService.addCategory(this.categoryObj).subscribe(
        res => {    
      console.log(res);
      alert("New Category added successfully");
      this.route.navigate(["/admin/categories"])
        },
        err => { console.log(err); }
      );

      }
    }


}
