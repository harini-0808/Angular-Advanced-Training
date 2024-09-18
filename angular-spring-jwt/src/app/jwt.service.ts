import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  
  constructor(private httpClient:HttpClient) { }

  authenticate(username:string,password:string){
    let url = "http://localhost:8082/api/v1/authenticate"
    let reqBody = {username,password}
    this.httpClient.post(url,reqBody).subscribe((data)=>{
      this.setToken((data as any)['jwt'])
    })
  }

  setToken(token:string){
    localStorage.setItem('token',token)
  }
}
