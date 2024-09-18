import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  product: {productId:string,description:string,brand:string,category:string} = {productId:'',description:'',brand:'',category:''}
  productForm = new FormGroup({
    productId:new FormControl('',[Validators.required,Validators.minLength(4)]),
    brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl(0,[Validators.required,Validators.min(0)]),
    category : new FormControl('',[Validators.required,Validators.minLength(3)]),
    description : new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  OnSubmit(){
    console.log(this.productForm)
  }
}
