import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dongle } from '../dongle';
import { DongleService } from '../regi.service';

@Component({
  selector: 'app-updatedongle',
  templateUrl: './updatedongle.component.html',
  styleUrls: ['./updatedongle.component.css']
})
export class UpdatedongleComponent implements OnInit {
  id: number;
  dongle : Dongle;
  //apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private  dongleService:  DongleService,
    private router: Router) { }

  ngOnInit() {
    this.dongle = new  Dongle();

    this.id = this.route.snapshot.params['id'];
    this.dongleService.getDongleById(this.id)
      .subscribe(data => {
        console.log(data)
        this.dongle = data;
      }, error => console.log(error));
  }

  updateDongle() {
    this.dongleService.updatedongle(this.id, this.dongle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.dongle = new  Dongle();
    this.router.navigate(['/dongle']);
    }

  
  list(){
    this.router.navigate(['dongle']);
  }

}
