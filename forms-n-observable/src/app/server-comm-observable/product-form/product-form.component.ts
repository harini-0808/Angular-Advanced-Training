import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/Product-simple';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  product:Product = new Product()
  productForm = new FormGroup({
    brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl(0,[Validators.required,Validators.min(0)]),
    category : new FormControl('',[Validators.required,Validators.minLength(3)]),
    description : new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  constructor(private productService:ProductService){}

  OnSubmit(){
   
    this.productService.saveProduct(this.product)
    this.productForm.reset()
  }
}

