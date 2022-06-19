import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userObj:User=new User();
 
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  onSignup(form:NgForm){
    this.userObj.firstName=form.value.firstName;
    this.userObj.lastName=form.value.lastName;
    this.userObj.email=form.value.email;
    this.userObj.password=form.value.password;
    //checking if email already exists
   this.auth.checkIfUserAlreadyExists().subscribe(res=>{
      const userExists = res.find((a:any)=>{
        return a.email === form.value.email
      });
      if(userExists){
        console.log(userExists);
        alert("User already exists,try Sign In");
        this.route.navigate(['login']);
       
        
      }
      else{
        localStorage.setItem('username',form.value.firstName+" "+form.value.lastName);
        //localStorage.setItem('user_id',form.value.email+form.value.password);
        localStorage.setItem('email',form.value.email);
       
        this.auth.addUser(this.userObj).subscribe(res=>
          {
           
            this.route.navigate(["home"]);
    
          },
          error=>{
            alert("Some error occured");
          })

      }
      
    },err=>{
      alert("Something went wrong");
    });
   
    
     
     
      
    }
    
     
      
  

    
    
    

}
