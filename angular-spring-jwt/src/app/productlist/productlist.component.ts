import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product-simple';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[CurrencyPipe,CommonModule],
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  products!:Product[]

  constructor(private productService:ProductService){}

  ngOnInit(): void {
      this.fetchProducts()
  }

  fetchProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    })
  }

  deleteProduct(productID:string){
    this.productService.deleteProduct(productID).subscribe(()=>{
      this.fetchProducts()
    })
  }


}
