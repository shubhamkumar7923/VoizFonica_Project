import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegiService } from '../regi.service';
import { User } from '../user';

@Component({
  selector: 'app-forgotadmin',
  templateUrl: './forgotadmin.component.html',
  styleUrls: ['./forgotadmin.component.css']
})
export class ForgotadminComponent implements OnInit {
 msg="";
 user = new User;
  constructor(private _service : RegiService, private _router : Router) { }

  ngOnInit(): void {

  }
  upAdmin(id2:string,pas:string){
      
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
      this._router.navigate(['/Adminlogin'])
    }

}
