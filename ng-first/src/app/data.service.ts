import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products :Array<Product> = [
    {category:'Headphone',productId:'p01',description:'kz edx pro 2',price:1000,brand:'KZ'},
    {description:'sony whm10z',productId:'p02',category:'Headphone',price:4000,brand:'Sony'},
    {category:'Headphone',productId:'p03',description:'beats tm100',price:8000,brand:'Beats'},
    {category:'Headphone',productId:'p04',description:'sr850',price:3000,brand:'SR'},
    {category:'Headphone',productId:'p05',description:'akg 360',price:24000,brand:'AKG'},
    {category:'TV',productId:'p06',description:'Sony 32inch smart TV',price:16000,brand:'Sony'},
    {category:'TV',productId:'p07',description:'Samsung 32inch smart TV',price:14000,brand:'Samsung'},
    {category:'TV',productId:'p08',description:'Xiaomi 44inch smart TV',price:13000,brand:'Xiaomi'},
    {category:'TV',productId:'p09',description:'LG 32inch smart TV',price:15000,brand:'LG'},
    {category:'Laptop',productId:'p10',description:'HP Probook',price:75000,brand:'HP'},
    {category:'Laptop',productId:'p11',description:'Lenovo slimpad',price:45000,brand:'Lenovo'},
    {category:'Laptop',productId:'p12',description:'Lenovo Ideapad gaming',price:62000,brand:'Lenovo'},
    {category:'Laptop',productId:'p13',description:'Acer one14',price:23000,brand:'Acer'},
    {category:'Mobile',productId:'p14',description:'Samsung galaxy A10',price:12000,brand:'Samsung'},
    {category:'Mobile',productId:'p15',description:'Samsung galaxy M10',price:11500,brand:'Samsung'},
    {category:'Mobile',productId:'p16',description:'Blackberry t10',price:8000,brand:'Blackberry'},
    {category:'Mobile',productId:'p17',description:'iPhone 12',price:50000,brand:'Apple'},
    {category:'Mobile',productId:'p18',description:'iPhone 10',price:40000,brand:'Apple'},
  ]

  
  
  constructor() { }

  fetchData() : Array<Product>{
    return this.products;
  }

  addData(product:Product):void{
    this.products.push({...product})
  }

}
