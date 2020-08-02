import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:any;
  aadhar:String=""
  name:String=""
  voters=[
    {
      "candidateName":"pankaj",
      "partyNamae":"Admk",
      "symbol":"image.url"
    },
    {
      "candidateName":"prabhu",
      "partyNamae":"dmk",
      "symbol":"image.url"
    },
    {
      "candidateName":"sharath",
      "partyNamae":"pmk",
      "symbol":"image.url"
    },
    {
      "candidateName":"partha",
      "partyNamae":"dmdk",
      "symbol":"image.url"
    }
  ]



  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userData = this.userService.userData;
  }

  alert(){
    alert("button is working");
  }

}
