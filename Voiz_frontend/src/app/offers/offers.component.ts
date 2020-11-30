import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

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
gotopayment(){
  this._router.navigate(['/payoffer',this.mes])

}
}
