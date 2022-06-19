import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { }
  readonly baseURL="https://ehealthcareapi.azurewebsites.net/api/Products";
  //formData: Product = new Product();
  //list: Product[];

  addProduct(data:any){
    return this.http.post(this.baseURL,data).pipe(map((res:any)=>{
      return res;
    }));
    
  }

  getAllProducts(){
    return this.http.get<any>(this.baseURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateProduct(data:any,id:number){
    return this.http.put("https://ehealthcareapi.azurewebsites.net/api/Products/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProduct(id:number){
    return this.http.delete("https://ehealthcareapi.azurewebsites.net/api/Products/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getSingleProduct(id:number){
    return this.http.get<any>("https://ehealthcareapi.azurewebsites.net/api/Products/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  

  /*deleteProducts(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }*/

  
}
