import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { RegiService } from '../regi.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  user = new User();
  msg='';


  constructor(private _service : RegiService, private _router : Router) { }

  ngOnInit(): void {
  }

  reguser()
  {
    this._service.reg(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/Adminlogin'])
      } ,
        error => {
        console.log("exception occured");
        this.msg="User already exists";
        }
    )
  }
}
