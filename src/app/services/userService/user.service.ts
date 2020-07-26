import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:7781/ovs/api";


  constructor(private _http:HttpClient) { }

  loginUser(aadharId){
    const params = new HttpParams();
    params.set("aadharId",aadharId);
    this._http.get(this.url+'/getUser',{params}).subscribe((response)=>{
      console.log(response);
 })
}
}
