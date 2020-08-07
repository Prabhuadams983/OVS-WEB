import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:7781/ovs/api";
  userData:any;
  private httpClient : HttpClient;
  constructor(private _http:HttpClient,
              private router:Router,httpBackend : HttpBackend,
              private authService:AuthService) {
                this.httpClient = new HttpClient(httpBackend);
               }

  loginUser(aadharId){
    const params = new HttpParams().set('aadharId',aadharId);
    this.httpClient.post(this.url+'/getUser',{params},{observe:'response',responseType:'text'})
    .subscribe((response)=>{
      if(response["status"] == 200){
        this.authService.saveAccessToken(response["headers"].get('X-Access-Token'));
        this.userData = response['user'];
        this.router.navigateByUrl('/user');
      }
 })
}
}
