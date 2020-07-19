import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  header:String='admin';
  showAdmin:boolean=true;
  showUser:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    if(this.showAdmin){
      this.showUser = true;
      this.showAdmin = false;
      this.header = 'User';
    }else{
      this.showAdmin = true;
      this.showUser = false;
      this.header = 'admin'
    }
  }

}
