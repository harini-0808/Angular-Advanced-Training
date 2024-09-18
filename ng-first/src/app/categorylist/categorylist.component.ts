import { Component, OnInit, ViewChild } from '@angular/core';
import {Product} from '../models/Product'
import { DataService } from '../data.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})
export class CategorylistComponent implements OnInit {
  resultCount:number = 0;
  categories :Array<'Headphone'|'TV'|'Laptop'|'Mobile'|'All'>= ['All','Headphone', 'TV', 'Laptop','Mobile']
  brands : Array<string> =[]
  selectedCategory: 'Headphone'|'TV'|'Laptop'|'Mobile'|'All' = 'Headphone'
  selectedBrand : string='all';
  products :Array<Product> =[]
  priceLimits : Array<number> = [2000,10000,15000,20000,30000,45000,50000,60000,70000,80000]
  priceRange : number = 80000;

  @ViewChild('container')
  container:any;

  selectCategory(category:'Headphone'|'TV'|'Laptop'|'Mobile'|'All'):void{
    this.selectedCategory = category
  }

  constructor(private dataService:DataService){
    
    this.products = dataService.fetchData();
    for(let product of this.products){
      if(!this.brands.includes(product.brand))
        this.brands.push(product.brand)
    }
  }
  ngOnInit(): void {
   
    this.products = this.dataService.fetchData();
    
  }

}
