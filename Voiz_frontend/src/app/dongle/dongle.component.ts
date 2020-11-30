import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DongleService } from '../regi.service';

@Component({
  selector: 'app-dongle',
  templateUrl: './dongle.component.html',
  styleUrls: ['./dongle.component.css']
})
export class DongleComponent implements OnInit {

  dongles: Observable<any>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  
  constructor(private dongleService: DongleService,
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

}
deletedongle(id: number) {
  this.dongleService.deletedongle(id)
    .subscribe(
      data => {
        console.log(data);
        this.dongles = this.dongleService.getdongle();
      },
      error => console.log(error));
}

updatedongle(id: number){
  this.router.navigate(['updatedongle', id]);
}

}
