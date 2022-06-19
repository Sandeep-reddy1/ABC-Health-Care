import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLogin:boolean;
  username:string;
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.isUserLogin=this.auth.isUserLoggedIn();
    this.username=localStorage["username"]
  }
  logout(){
    localStorage["email"]='';
    localStorage["username"]='';
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['home']);
   
  }

}
