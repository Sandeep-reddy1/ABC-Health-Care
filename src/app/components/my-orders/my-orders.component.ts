import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orderArray: Array<Order> =[];
  filterOrderArray:Array<Order>=[];
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    this.orderService.getOrder().subscribe(res=>{
      this.orderArray=res;
      this.filterOrderArray=this.orderArray.filter((p:any)=>p.userEmailId===localStorage['email'])});

  }

}
