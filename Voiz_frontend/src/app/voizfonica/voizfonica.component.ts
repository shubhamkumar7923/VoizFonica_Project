import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voizfonica',
  templateUrl: './voizfonica.component.html',
  styleUrls: ['./voizfonica.component.css']
})
export class VoizfonicaComponent implements OnInit {
  num=10;
  constructor() { }

  ngOnInit(): void {
  }

  x=setInterval(()=>{
    if(this.num>138646)
    {
      clearInterval(this.x)
    }
    else{
      this.num=this.num+2000
    }
  },100)
}

