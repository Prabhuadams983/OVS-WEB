import { Component, OnInit, Input } from '@angular/core';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
  locationsList:any=[];
  userForm:FormGroup;
  constructor(private adminService:AdminServiceService,
              private formBuilder:FormBuilder) { 
    this.adminService.$locations.subscribe((locations)=>{
      this.locationsList = locations;  
    });

    this.userForm = this.formBuilder.group({
      name:['',Validators.required],
      aadharId:['',Validators.maxLength(12)],
      age:['',Validators.min(18)],
      gender:['',Validators.required]
    })
  }

  ngOnInit() {
    
  }

}
