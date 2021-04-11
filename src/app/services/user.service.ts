import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://localhost:44304/api/auth"
  constructor(private httpClient:HttpClient) { }

  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/update",user)
  }
  getUsers() :Observable<ListResponseModel<User>>{
    let newPath =this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath);

  }
  getUsersById(id:number) :Observable<ListResponseModel<User>>{
    let newPath =this.apiUrl+"/getbyid?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);

  }
  getUserByEmail(email:string) : Observable<ListResponseModel<User>>{

    let newPath =this.apiUrl+"/getbyemail?email="+email
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getUserByName(name:string) : Observable<ListResponseModel<User>>{
    let newPath =this.apiUrl+"/getbyname?name="+name
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }


}
