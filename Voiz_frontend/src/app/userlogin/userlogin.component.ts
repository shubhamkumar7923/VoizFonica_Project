import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Employee } from '../employee';
import { EmployeeService, RegiService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
   emp = new Remo();
  msg='';
  //emp : Employee = new Employee();

  constructor(private _service : EmployeeService, private _router : Router) { }

  ngOnInit(): void {
  }
  loginUser(id:string)
  {
    this._service.logi(this.emp).subscribe(
      data => {
       //this._service.temp = data.fname;
        console.log("response recived");
        console.log(data.emailId);
        // console.log(data.password);
        // console.log(data.fname);
        console.log(data.emailId);
        console.log(data.password);
        this._router.navigate(['/userhome',id])
        console.log("response recieved");


      } ,
        error => {
        console.log("exception occured");
        this.msg="Bad Credentials, please enter valid emailid and password";
        }
    )
  }
  goreg()
  {
    this._router.navigate(['/userreg']);
  }

  
}


