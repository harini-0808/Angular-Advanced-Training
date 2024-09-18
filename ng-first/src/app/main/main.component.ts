import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input()
  theme : 'dark' | 'light' = 'light'
  
  title :string= 'shahad';
  productId :string= 'p01'
  description:string = 'kz edx pro 2'
  available:boolean = true
  orderDate: Date = new Date()
  quantity: number = 56;
  orderQuantity :number = 0;
  orderedQuantity:number=0
  isOrderedQuantityAvailable : boolean= this.orderQuantity < this.quantity;
  deliveryColor = 'red'
  orderReady:boolean = false;
  products = [{description:'sony whm10z',productId:'p02'},{productId:'p03',description:'beast tm100'},
    {productId:'p04',description:'sr850'},{productId:'p05',description:'akg 360'}
  ]

  change(value:any){
    this.theme = value
  }
  informOrder(quantity : string) : void{
    alert("placing "+quantity+" items for order")
  }

  placeOrder() : void{
    alert("order placed")
    this.orderReady = false
     this.deliveryColor = 'red'
    this.orderedQuantity+= this.orderQuantity
    this.quantity -= this.orderQuantity;
  }

  setTimeOut() : void{
    setTimeout(() => {
        this.orderReady = true
        this.deliveryColor = 'green'
    }, 5000);
  }

  inStock():number{
    return this.quantity > 50 ? 1 : 0;
  }

}

