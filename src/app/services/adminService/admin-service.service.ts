import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService implements OnInit{
  private httpClient : HttpClient;
  private url = "http://localhost:7781/ovs/api";
  public locationsList:any=[];
  public $locations = new Subject()
  constructor(private _http:HttpClient,
              private httpBackend : HttpBackend,
              private router:Router) {
    this._http.get(this.url+'/getLocations').subscribe((response)=>{
      this.$locations.next(response['locations']);
    });
    this.httpClient = new HttpClient(httpBackend);
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

  addUser(user){
    this._http.post(this.url+'/addUser',user).subscribe((response)=>{
      console.log(response);
    });
  }

  adminLogin(data){
    this.httpClient.post(this.url+"/login",data)
      .subscribe((res)=>{
        this.router.navigateByUrl('/admin');
      })
  }
}
