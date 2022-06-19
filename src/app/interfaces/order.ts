export class Order {
    id?:number;
    userEmailId?:string;
    address:string;
    phoneNumber:string;
    orderProductId?:number;
    orderProductName?:string;
    orderProductPrice?: number;
    orderProductImage?: string;
    orderProductQuantity?:number;
    orderProductDateTime?:string;
}
