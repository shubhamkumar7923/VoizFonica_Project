import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RegiService } from '../regi.service';
import { User } from '../user';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  mes="";
  user= new User();
  constructor(private _service:RegiService,private _router : Router,private spinner: NgxSpinnerService,
    private _activatedRoute:ActivatedRoute) { }

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
    this.getAdmin();
  }
getAdmin(){
  this._service.getById(this.mes).subscribe(
    data=> this.user=data
  )
}
gotoprofile(){
  this._router.navigate(['/adminprofile',this.mes])
}
}
