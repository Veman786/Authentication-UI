import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
