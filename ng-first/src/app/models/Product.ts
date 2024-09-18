
export class Product{
    brand:string;
    productId:string;
    description:string;
    category:string;
    price:number;



    constructor(productId:string='',description:string='',category:string='',price:number=0,brand:string=''){
        this.productId = productId;
        this.description = description;
        this.category = category;
        this.price = price;
        this.brand = brand
    }
}

