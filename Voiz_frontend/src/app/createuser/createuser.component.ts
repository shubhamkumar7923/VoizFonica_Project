import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  providers: [EmployeeService],
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  employee: Remo = new Remo();
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.employeeService.reg(this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Remo();
    this.router.navigate(['/employees']);
  }

 
}
