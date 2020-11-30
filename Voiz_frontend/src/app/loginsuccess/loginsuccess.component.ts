import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegiService} from '../regi.service';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from '../user';
//import { CustomerService } from '../regi.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
// emailId:string;
// user =new User();
public fname = '';
constructor(private service : RegiService, private _router : Router) {
  this.fname=this.service.temp;
  console.log("product"+this.service.temp);
 }

 

ngOnInit() {
   
}


}
