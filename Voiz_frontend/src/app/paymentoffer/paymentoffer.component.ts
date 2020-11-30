import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../payment';
import { EmployeeService, PaymentService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-paymentoffer',
  templateUrl: './paymentoffer.component.html',
  styleUrls: ['./paymentoffer.component.css']
})
export class PaymentofferComponent implements OnInit {

  payment: Payment = new Payment();
  emp= new Remo();

  mes="";
  submitted = false;

  constructor(private _service:EmployeeService,
    private paymentService: PaymentService,private _activatedRoute:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
    console.log(this.mes);
    this.getUser();
    
  }
getUser(){
  this._service.getByEmailId(this.mes).subscribe(
    data=> this.emp=data
  )
}
  


  onPay() {
    this.submitted = true;
    this.paymentService.addpay(this.payment)
    .subscribe(data => console.log(data),
     error => console.log(error));
    this.payment = new Payment();
    this.router.navigate(['/paymentsuccess',this.mes]);
  }
 

}
