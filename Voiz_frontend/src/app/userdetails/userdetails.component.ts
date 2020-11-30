import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from '../regi.service';
//import { ApiResponse } from 'src/app/model/api.response';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  providers: [EmployeeService],
  styleUrls: ['./userdetails.component.css'],
  
})
export class UserdetailsComponent implements OnInit {

  employees: Observable<any>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  
  constructor(private employeeService: EmployeeService,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          (<any>$('#example')).DataTable();
      });
      },10);
      
    }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    setTimeout(function(){
      $(function(){
        (<any>$('#example')).DataTable();
    });
    },10);

  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.employees = this.employeeService.getEmployees();
        },
        error => console.log(error));
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }


}
