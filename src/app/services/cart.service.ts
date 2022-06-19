import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly baseURL="https://ehealthcareapi.azurewebsites.net/api/Carts";
  
  constructor(private http:HttpClient) { }

  addToCart(product:object) {
    return this.http.post(this.baseURL,product).pipe(map((res:any)=>{
      return res;
    }));
  }
  getCart() {
    return this.http.get<any>(this.baseURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProduct(id:any) {
    return this.http.delete("https://ehealthcareapi.azurewebsites.net/api/Carts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateQuantity(data:any,id:any){
    return this.http.put("https://ehealthcareapi.azurewebsites.net/api/Carts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
