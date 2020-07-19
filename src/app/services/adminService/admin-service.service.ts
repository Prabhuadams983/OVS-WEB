import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private url = "http://localhost:7781/ovs/api";
  constructor(private _http:HttpClient) { }

  addLocation(location){
    this._http.post(this.url+'/addLocation',location).subscribe((response)=>{
      console.log(response);
    });
  }
}
