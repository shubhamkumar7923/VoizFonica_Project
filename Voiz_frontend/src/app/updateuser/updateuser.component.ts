import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  providers: [EmployeeService],
  styleUrls: ['./updateuser.component.css']
})

export class UpdateuserComponent implements OnInit {

  id: number;
  employee: Remo;
  //apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Remo();

    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Remo();
    this.router.navigate(['/employees']);
    }

  
  list(){
    this.router.navigate(['employees']);
  }
}