import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService implements OnInit{

  private url = "http://localhost:7781/ovs/api";
  public locationsList:any=[];
  public $locations = new Subject()
  constructor(private _http:HttpClient) {
    this._http.get(this.url+'/getLocations').subscribe((response)=>{
      this.$locations.next(response['locations']);
    });
   }

  ngOnInit(){
    
  }

  addLocation(location){
    this._http.post(this.url+'/addLocation',location).subscribe((response)=>{

    });
  }

  uploadImage(formData){
    return this._http.post(this.url+'/upload',formData);
  }

  addCandidate(candidate){
    this._http.post(this.url+'/addCandidate',candidate).subscribe((response)=>{
      console.log(response);
    });    
  }
}
