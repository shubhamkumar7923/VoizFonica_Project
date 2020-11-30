import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PrepaidService } from '../regi.service';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {

  prepaids: Observable<any>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  
  constructor(private prepaidService: PrepaidService,
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

}
deletepre(id: number) {
  this.prepaidService.deletepre(id)
    .subscribe(
      data => {
        console.log(data);
        this.prepaids = this.prepaidService.getpre();
      },
      error => console.log(error));
}

updatepre(id: number){
  this.router.navigate(['updateprepaid', id]);
}
}
