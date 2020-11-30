import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from '../payment';
import { EmployeeService, PaymentService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  mes="";
  emp =new Remo();
  payments: Observable<any>;

  constructor(private _service:EmployeeService,private _router : Router,
    private paymentService: PaymentService,private _activatedRoute:ActivatedRoute) { 

      setTimeout(function(){
        $(function(){
          (<any>$('#example')).DataTable();
      });
      },10);
    }

  ngOnInit() {


    setTimeout(function(){
      $(function(){
        (<any>$('#example')).DataTable();
    });
    },10);

    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
    console.log(this.mes);
    this.getUser();

    this.payments = this.paymentService.getpaymentbyId(this.mes);

  }
getUser(){
  this._service.getByEmailId(this.mes).subscribe(
    data=> this.emp=data
  )
}
goback()
{
  this._router.navigate(['/userhome',this.mes])

}

}
