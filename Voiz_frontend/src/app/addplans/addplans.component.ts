import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dongle } from '../dongle';
import { Postpaid } from '../postpaid';
import { Prepaid } from '../prepaid';
import { DongleService, PostpaidService, PrepaidService } from '../regi.service';

@Component({
  selector: 'app-addplans',
  templateUrl: './addplans.component.html',
  styleUrls: ['./addplans.component.css']
})
export class AddplansComponent implements OnInit {

  prepaid: Prepaid = new Prepaid();
  postpaid: Postpaid = new Postpaid();
  dongle: Dongle = new Dongle();
  submitted = false;

  

  constructor(private prepaidService: PrepaidService,private postpaidService: PostpaidService,
    private dongleService: DongleService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onPrepaid(){
    this.submitted = true;
    this.prepaidService.addpre(this.prepaid)
    .subscribe(data => console.log(data), error => console.log(error));
    this.prepaid = new Prepaid();
    this.router.navigate(['/prepaid']);

  }
  onPostpaid(){
    this.submitted = true;
    this.postpaidService.addpost(this.postpaid)
    .subscribe(data => console.log(data), error => console.log(error));
    this.postpaid = new Postpaid();
    this.router.navigate(['/postpaid']);

  }
  onDongle(){
    this.submitted = true;
    this.dongleService.adddongle(this.dongle)
    .subscribe(data => console.log(data), error => console.log(error));
    this.dongle = new Dongle();
    this.router.navigate(['/dongle']);

  }
  
}
