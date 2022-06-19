import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  readonly baseURL="https://ehealthcareapi.azurewebsites.net/api/Categories";

  addCategory(data:any){
    return this.http.post(this.baseURL,data).pipe(map((res:any)=>{
      return res;
    }));
    
  }

  getAllCategories(){
    return this.http.get<any>(this.baseURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateCategory(data:any,id:number){
    return this.http.put("https://ehealthcareapi.azurewebsites.net/api/Categories/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteCategory(id:number){
    return this.http.delete("https://ehealthcareapi.azurewebsites.net/api/Categories/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getSingleCategory(id:number){
    return this.http.get<any>("https://ehealthcareapi.azurewebsites.net/api/Categories/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
