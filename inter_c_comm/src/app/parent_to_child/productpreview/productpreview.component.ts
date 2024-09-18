import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productpreview',
  standalone: true,
  imports: [],
  templateUrl: './productpreview.component.html',
  styleUrl: './productpreview.component.css'
})
export class ProductpreviewComponent {

  @Input()
  productId:string = ''
  @Input()
  description:string = ''
  @Input()
  brand:string = ''
  @Input()
  price:number = 0
}
