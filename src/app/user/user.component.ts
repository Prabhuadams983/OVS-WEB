import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userData = this.userService.userData;
  }

  alert(){
    alert("button is working");
  }

}
