export class Product{
    productId!:string;
    brand!:string;
    price!:number;
    category!:string;
    description!:{
        age:number;
        season:string
    }
    suppliers!: Array<any>

}