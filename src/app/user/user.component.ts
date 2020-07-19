import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  aadhar:String="111122223333"
  name:String="pankaj"
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



  constructor() { }

  ngOnInit() {
  }

  alert(){
    alert("button is working");
  }

}
