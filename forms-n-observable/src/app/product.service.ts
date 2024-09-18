import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/Product-simple';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

   saveProduct(product : Product){
    console.log(product)
    let url = "http://localhost:8082/api/v1/product"
    this.httpClient.post(url,product).subscribe((data)=>{
      console.log("successfully sent request"),
      (error:any)=>{
        console.error(error)
      }
    })
   //fetch(url,{method:"post",body:JSON.stringify(product),headers:{'Content-Type':'application/json'}})
  }

  getProducts():Observable<Array<Product>>{
    let url = "http://localhost:8082/api/v1/products"
    return this.httpClient.get<Array<Product>>(url)
  }

  deleteProduct(productID:string):Observable<any>{
    let url = `http://localhost:8082/api/v1/product/${productID}`
    return this.httpClient.delete(url)
  }


}
