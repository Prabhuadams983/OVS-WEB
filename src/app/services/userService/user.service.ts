import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:7781/ovs/api";
  userData:any;

  constructor(private _http:HttpClient,
              private router:Router) { }

  loginUser(aadharId){
    const params = new HttpParams().set('aadharId',aadharId);
    this._http.get(this.url+'/getUser',{params}).subscribe((response)=>{
      if(response["status"] == 200){
        this.userData = response['user'];
        this.router.navigateByUrl('/user');
      }
 })
}
}
