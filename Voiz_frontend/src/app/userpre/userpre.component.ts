import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService, PrepaidService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-userpre',
  templateUrl: './userpre.component.html',
  styleUrls: ['./userpre.component.css']
})
export class UserpreComponent implements OnInit {
  prepaids: Observable<any>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  mes="";
  emp= new Remo();
 
  


  constructor(private _service:EmployeeService,private prepaidService: PrepaidService,private _activatedRoute:ActivatedRoute,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          (<any>$('#example')).DataTable();
      });
      },10);
      
    }

  ngOnInit() {
    this.prepaids = this.prepaidService.getpre();
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
  this.router.navigate(['/paypre',this.mes,id])

}

}
