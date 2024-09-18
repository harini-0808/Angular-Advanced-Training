import { Component, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductpreviewComponent } from "../productpreview/productpreview.component";


@Component({
  standalone:true,
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.css',
  imports: [FormsModule, ProductpreviewComponent]
 
})
export class ProductformComponent {
  @Output()
  productId: string = ''
  @Output()
  description:string = ''
  @Output()
  brand:string = ''
  @Output()
  price:number=0


  constructor(){
   
  }

  OnSubmit(){
   
      alert(this.productId)
  }
}
