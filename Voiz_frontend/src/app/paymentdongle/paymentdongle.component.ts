import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dongle } from '../dongle';
import { Payment } from '../payment';
import { DongleService, EmployeeService, PaymentService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-paymentdongle',
  templateUrl: './paymentdongle.component.html',
  styleUrls: ['./paymentdongle.component.css']
})
export class PaymentdongleComponent implements OnInit {

  payment: Payment = new Payment();
  emp= new Remo();
  dongle=new Dongle;
  planid:number;

  pid:string;
  mes="";
  msg="";
  submitted = false;

  constructor(private _service:EmployeeService,private dongleService: DongleService,
    private paymentService: PaymentService,private _activatedRoute:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
    let id1= parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.planid=id1;
    console.log(this.mes);
    this.getUser();
    this.dongleService. getDongleById(this.planid).subscribe(
      
      data=>{
        this.dongle=data
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
