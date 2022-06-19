import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private authenticationService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form:NgForm){
    this.authenticationService.login().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === form.value.email && a.password === form.value.password 
      });
      if(user){
       
        localStorage.setItem('username',user.firstName+" "+user.lastName);
        localStorage.setItem('email',user.email);
        //localStorage.setItem('userId',user.id);
        this.router.navigate(["home"])
      }else{
        alert("Incorrect emailId or password");
      }
    },err=>{
      alert("Something went wrong")
    })

}

}
