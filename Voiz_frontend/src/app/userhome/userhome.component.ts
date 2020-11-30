import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from '../regi.service';
import { Remo } from '../remo';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

 

  mes="";
  emp= new Remo();
  constructor(private _service:EmployeeService,private _router : Router,private spinner: NgxSpinnerService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
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
gotoprofile(){
  this._router.navigate(['/userprofile',this.mes])
}

gotopre(){
  this._router.navigate(['/userpre',this.mes])

}
gotopost(){
  this._router.navigate(['/userpost',this.mes])

}
gotodongle(){
  this._router.navigate(['/userdongle',this.mes])

}
gotooffers(){
  this._router.navigate(['/offers',this.mes])

}
gotofaq(){
  this._router.navigate(['/faq',this.mes])

}
gotochat(){
  this._router.navigate(['/chat',this.mes])

}
gotologout(){
  this._router.navigate(['/logout'])

}
gototransaction()
{
  this._router.navigate(['/transaction',this.mes])

}
}
