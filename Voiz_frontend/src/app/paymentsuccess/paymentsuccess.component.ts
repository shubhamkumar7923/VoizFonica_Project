import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {

  mes="";
  emp= new Remo();
  constructor(private _service:EmployeeService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
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
goback()
{
  this._router.navigate(['/userhome',this.mes])
}
}
