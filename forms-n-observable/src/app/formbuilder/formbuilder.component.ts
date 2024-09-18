import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Product} from "../models/Product"
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent implements OnInit{
  product:Product = new Product();
  productForm! : FormGroup;
  constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
    
    this.productForm = this.formBuilder.group({
    
      productId:['',[Validators.required,Validators.minLength(4)]],
      brand: ['',[Validators.required,Validators.minLength(3)]],
      price: [0,[Validators.required,Validators.min(0)]],
      category : ['',[Validators.required,Validators.minLength(3)]],
      description :
        this.formBuilder.group({
          age: [0,[Validators.min(1)]],
          season : ['',[Validators.required,Validators.minLength(4)]]
        })
      ,
      suppliers : this.formBuilder.array([
        this.formBuilder.control('')
      ])
    })
    // console.log(this.productForm)
  }

  get suppliers()
  {
    return this.productForm.get('suppliers') as FormArray
  }
  get productId(){
    return this.productForm.controls['productId'];
  }

  get season(){
    return this.productForm.controls['description'].get('season') as FormControl;
  }

  addNewSupplier(){
     this.suppliers.push(this.formBuilder.control(''))
  }

  OnSubmit(){
      
      this.product.productId = this.productForm.controls['productId'].value
      this.product.brand = this.productForm.controls['brand'].value
      this.product.price = this.productForm.controls['price'].value
      this.product.category = this.productForm.controls['category'].value
      this.product.description = {age:(this.productForm.controls['description'] as FormGroup).controls['age'].value,
        season:(this.productForm.controls['description'] as FormGroup).controls['season'].value}
      this.product.suppliers = this.productForm.controls['suppliers'].value
      console.log(this.product)
  }

  
}
