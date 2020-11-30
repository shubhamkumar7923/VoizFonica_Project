import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../regi.service';

import { Remo } from '../remo';

@Component({
  selector: 'app-forgotuser',
  templateUrl: './forgotuser.component.html',
  styleUrls: ['./forgotuser.component.css']
})
export class ForgotuserComponent implements OnInit {

  
  msg="";
  emp = new Remo;
  constructor(private _service : EmployeeService, private _router : Router) { }
  ngOnInit(): void {
  }
  upUser(id2:string,pas:string){
      
    this._service.updateUserPasswordFromRemote(id2,pas).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }

    goback()
    {
      this._router.navigate(['/userlogin'])
    }

}
