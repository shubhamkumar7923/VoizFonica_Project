import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postpaid } from '../postpaid';
import { PostpaidService } from '../regi.service';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  id: number;
  postpaid : Postpaid;
  //apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private postpaidService: PostpaidService,
    private router: Router) { }

  ngOnInit() {
    this.postpaid = new Postpaid();

    this.id = this.route.snapshot.params['id'];
    this.postpaidService.getPostById(this.id)
      .subscribe(data => {
        console.log(data)
        this.postpaid = data;
      }, error => console.log(error));
  }

  updatePostpaid() {
    this.postpaidService.updatepost(this.id, this.postpaid)
      .subscribe(data => console.log(data), error => console.log(error));
    this.postpaid = new Postpaid();
    this.router.navigate(['/postpaid']);
    }

  
  list(){
    this.router.navigate(['postpaid']);
  }
}
