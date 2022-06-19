import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onAdminLogin(form:NgForm){
    this.auth.adminLogin().subscribe(res=>{
      const admin = res.find((a:any)=>{
        return a.email === form.value.email && a.password === form.value.password 
      });
      if(admin){
       
        localStorage.setItem('admin',"admin");
        this.router.navigate(["/admin/products"])
      }else{
        alert("Admin Credentials Invalid")
      }
    },err=>{
      alert("Something went wrong")
    })

}

}
