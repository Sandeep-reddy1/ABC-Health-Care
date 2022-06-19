import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly baseURL="https://ehealthcareapi.azurewebsites.net/api/Orders";
  constructor(private http:HttpClient) { }

  addOrder(product:object) {
    return this.http.post(this.baseURL,product).pipe(map((res:any)=>{
      return res;
    }));
  }
  getOrder() {
    return this.http.get<any>(this.baseURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
