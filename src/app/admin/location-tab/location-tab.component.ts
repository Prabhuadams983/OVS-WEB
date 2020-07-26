import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroupDirective } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/adminService/admin-service.service';

@Component({
  selector: 'app-location-tab',
  templateUrl: './location-tab.component.html',
  styleUrls: ['./location-tab.component.css']
})
export class LocationTabComponent {
  @ViewChild('locationForm',{static:false}) locationForm:FormGroupDirective;
  private locations:any=[];
  constructor(private adminService:AdminServiceService) { }

  addLocation(){
    if(this.locationForm.valid){
      this.locationForm.value.locationId = "TNE"+this.locationForm.value.locationId;
      this.adminService.addLocation(this.locationForm.value);
      this.locationForm.resetForm();
    }
  }

}
