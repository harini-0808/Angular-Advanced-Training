import { Component, ViewChild } from '@angular/core';
import { Product } from '../models/Product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.css'
})
export class ProductformComponent {

  @ViewChild('form')
  form:any
  availableCategories : Array<string> = ['Headphone','TV','Laptop','Mobile']
  product:Product;

  constructor(private dataService:DataService){
    this.product = new Product();
  }

  OnSubmit(e:any){
    
    if (!this.form.nativeElement.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
      this.form.nativeElement.classList.add('was-validated')
    }
    else{
      
      this.dataService.addData(this.product)
      this.form.nativeElement.reset()
      this.form.nativeElement.classList.remove('was-validated')
      
    }

   
   
      
  }
}
