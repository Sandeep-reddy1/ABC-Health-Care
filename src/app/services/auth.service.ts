import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl="https://ehealthcareapi.azurewebsites.net/api/Users";
  constructor(private http:HttpClient) { }

  addUser(data:any){
    return this.http.post<any>(this.baseUrl,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  login(){
    return this.http.get<any>(this.baseUrl);
  }
  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }
  checkIfUserAlreadyExists(){
  return this.http.get<any>(this.baseUrl);
  }
  adminLogin(){
    return this.http.get<any>("https://ehealthcareapi.azurewebsites.net/api/Admins");
  }
  isAdmin(){
    let admin=localStorage.getItem('admin');
    if(admin!=="")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  isUserLoggedIn(){
    let user=localStorage.getItem('email');
    if(user!=="")
    {
      return true;
    }
    else if(user===null){
      return false;
    }
    else
    {
      return false;
    }
  }
}
