import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { RegiService } from '../regi.service';
import { User } from '../user';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  mes="";
  user:User;
  constructor(private _service:RegiService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
    this.getAdmin();
  }

  getAdmin(){
    this._service.getById(this.mes).subscribe(
      data=> this.user=data
    )
    
  }
  goback()
  {
    this._router.navigate(['/aboutus',this.mes])
  }
  
}
