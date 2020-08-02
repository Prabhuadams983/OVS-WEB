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
  @ViewChild("adminForm",{static:false}) adminForm:NgForm;

  header:String='admin';
  showAdmin:boolean=true;
  showUser:boolean=false;

  constructor(private userService:UserService,
              private adminService : AdminServiceService) { }

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

  userLogin(){
    if(this.userForm.valid){
      this.userService.loginUser(this.userForm.value.aadharId);
    }
  }

  adminLogin(){
    if(this.adminForm.valid){
     this.adminService.adminLogin(this.adminForm.value);
    }
  }

}
