import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('userForm',{static:false}) userForm:NgForm;

  header:String='admin';
  showAdmin:boolean=true;
  showUser:boolean=false;

  constructor(private userService:UserService) { }

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

  login(){
    if(this.userForm.valid){
      // call api

      this.userService.loginUser(this.userForm.value.aadharId);

      // route to next screen
     // this.router.navigateByUrl('/user');
    }
  }

}
