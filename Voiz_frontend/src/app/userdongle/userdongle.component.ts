import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DongleService, EmployeeService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-userdongle',
  templateUrl: './userdongle.component.html',
  styleUrls: ['./userdongle.component.css']
})
export class UserdongleComponent implements OnInit {

  dongles: Observable<any>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  mes="";
  emp= new Remo();
 
  

    constructor(private _service:EmployeeService,private dongleService: DongleService,private _activatedRoute:ActivatedRoute,
      private router: Router) { 
        setTimeout(function(){
          $(function(){
            (<any>$('#example')).DataTable();
        });
        },10);
        
      }


  ngOnInit() {
    this.dongles = this.dongleService.getdongle();
    setTimeout(function(){
      $(function(){
        (<any>$('#example')).DataTable();
    });
    },10);
    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
    console.log(this.mes);
    this.getUser();

}
 getUser(){
  this._service.getByEmailId(this.mes).subscribe(
    data=> this.emp=data
  )
}
goback()
{
  this.router.navigate(['/userhome',this.mes])

}
gotopayment(id:number){
  this.router.navigate(['/paydongle',this.mes,id])

}

}
