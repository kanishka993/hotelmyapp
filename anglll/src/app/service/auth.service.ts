import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
user:any
  constructor(
    private http:HttpClient
  ) { }
  registerUser(user){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.http.post("http://localhost:3000/user/register", user, {headers:headers});
     
  
  }
}
