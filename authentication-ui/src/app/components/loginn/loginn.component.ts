import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
type:string ="password";
istext:boolean=false;
eyeicon:string="fa-eye-slash";
  constructor() { }

  ngOnInit(): void {
  }
  hideshowpass()
  {
    this.istext=  !this.istext;
    this.istext ? this.eyeicon="fa-eye": this.eyeicon="fa-eye-slash";
    this.istext ? this.type="text":this.type="password";

  }

}
