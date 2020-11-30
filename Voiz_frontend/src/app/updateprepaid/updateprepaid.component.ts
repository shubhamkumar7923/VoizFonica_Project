import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prepaid } from '../prepaid';
import { PrepaidService } from '../regi.service';

@Component({
  selector: 'app-updateprepaid',
  templateUrl: './updateprepaid.component.html',
  styleUrls: ['./updateprepaid.component.css']
})
export class UpdateprepaidComponent implements OnInit {
  id: number;
  prepaid : Prepaid;
  //apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private prepaidService: PrepaidService,
    private router: Router) { }

  ngOnInit() {
    this.prepaid = new Prepaid();

    this.id = this.route.snapshot.params['id'];
    this.prepaidService.getPreById(this.id)
      .subscribe(data => {
        console.log(data)
        this.prepaid = data;
      }, error => console.log(error));
  }

  updatePrepaid() {
    this.prepaidService.updatepre(this.id, this.prepaid)
      .subscribe(data => console.log(data), error => console.log(error));
    this.prepaid = new Prepaid();
    this.router.navigate(['/prepaid']);
    }

  
  list(){
    this.router.navigate(['prepaid']);
  }

}
