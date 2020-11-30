import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../regi.service';
import { HttpClientModule } from '@angular/common/http'; 
import { Remo } from '../remo';

@Component({
  selector: 'app-usereg',
  templateUrl: './usereg.component.html',
  styleUrls: ['./usereg.component.css']
})
export class UseregComponent implements OnInit {
  submitted = false;
  //emp = new Employee();

  msg = '';
  emp = new Remo();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  userreg() {
   this.submitted = true;
        
        this.employeeService.reg(this.emp).subscribe(
          data => {
            console.log("response recieved");
            console.log(data.emailId);
            this.router.navigate(['/userlogin'])
          } ,
            error => {
            console.log("exception occured");
            this.msg="User already exists";
            }
        )
          
    }
    
}
