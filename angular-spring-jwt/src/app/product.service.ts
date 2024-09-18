import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/Product-simple';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient,private jwtService:JwtService
  ) { }

   saveProduct(product : Product){
    console.log(product)
    let url = "http://localhost:8082/api/v1/product"
    this.httpClient.post(url,product,{headers:new HttpHeaders().set('Authorization',"Bearer "+this.getToken())}).subscribe((data)=>{
      console.log("successfully sent request"),
      (error:any)=>{
        console.error(error)
      }
    })
   //fetch(url,{method:"post",body:JSON.stringify(product),headers:{'Content-Type':'application/json'}})
  }

  getToken():string{
    return localStorage.getItem('token')!
  }

  getProducts():Observable<Array<Product>>{
    let url = "http://localhost:8082/api/v1/products"

    return this.httpClient.get<Array<Product>>(url, {headers:new HttpHeaders().set('Authorization',"Bearer "+this.getToken())})
  }

  deleteProduct(productID:string):Observable<any>{
    let url = `http://localhost:8082/api/v1/product/${productID}`
    return this.httpClient.delete(url,{headers: new HttpHeaders().set('Authorization',"Bearer "+this.getToken())})
  }


}
