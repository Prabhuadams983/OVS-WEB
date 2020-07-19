import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location-tab',
  templateUrl: './location-tab.component.html',
  styleUrls: ['./location-tab.component.css']
})
export class LocationTabComponent implements OnInit {
  locationForm:NgForm;

  constructor() { }

  ngOnInit() {
  }

  addLocation(){
    
  }

}
