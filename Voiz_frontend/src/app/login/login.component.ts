import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegiService } from '../regi.service';
import { User } from '../user';

//import { RegComponent } from './reg/reg.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
msg='';
name ="";


  constructor(private _service : RegiService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(id:string)
  {
    this._service.login(this.user).subscribe(
      data => {
        this._service.temp = data.fname;
        this._router.navigate(['/aboutus',id])
        console.log("response recived");
        console.log(data.emailId);
        console.log(data.password);
        console.log(data.fname);
        console.log("response recieved");
        // this._router.navigate(['/aboutus'])

      } ,
        error => {
        console.log("exception occured");
        this.msg="Bad Credentials, please enter valid emailid and password";
        }
    )
  }

  goreg()
  {
    this._router.navigate(['/reg']);
  }

}
