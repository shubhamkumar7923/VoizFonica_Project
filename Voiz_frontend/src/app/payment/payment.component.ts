import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from '../payment';
import { Prepaid } from '../prepaid';
import { EmployeeService, PaymentService, PrepaidService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: Payment = new Payment();
  emp= new Remo();
  prepaid=new Prepaid;
  planid:number;

  pid:string;
  mes="";
  msg="";
  submitted = false;

  constructor(private _service:EmployeeService,private prepaidService: PrepaidService,
    private paymentService: PaymentService,private _activatedRoute:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
    let id1= parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.planid=id1;
    console.log(this.mes);
    this.getUser();
    this.prepaidService.getPreById(this.planid).subscribe(
      
      data=>{
        this.prepaid=data
        console.log("plans response received");
      
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      
    )
  }
getUser(){
  this._service.getByEmailId(this.mes).subscribe(
    data=> this.emp=data
  )
}
  


  onPay(id:number) {
    this.submitted = true;
    this.paymentService.addpay(this.payment)
    .subscribe(data => console.log(data),
     error => console.log(error));
    this.payment = new Payment();
    this.router.navigate(['/paymentsuccess',this.mes,this.planid]);
  }
 
}
