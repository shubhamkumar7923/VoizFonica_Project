import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostpaidService } from '../regi.service';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {

 
  postpaids: Observable<any>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  
  constructor(private postpaidService: PostpaidService,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          (<any>$('#example')).DataTable();
      });
      },10);
      
    }

  ngOnInit() {
    this.postpaids = this.postpaidService.getpost();
    setTimeout(function(){
      $(function(){
        (<any>$('#example')).DataTable();
    });
    },10);

}
deletepost(id: number) {
  this.postpaidService.deletepost(id)
    .subscribe(
      data => {
        console.log(data);
        this.postpaids = this.postpaidService.getpost();
      },
      error => console.log(error));
}

updatepost(id: number){
  this.router.navigate(['updatepost', id]);
}



}
