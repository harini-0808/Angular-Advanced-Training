import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css',

})
export class FormValidationComponent {
  product: {productId:string,description:string,brand:string,category:string} = {productId:'',description:'',brand:'',category:''}


  OnSubmit(){

  }

   
  
}

