import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/loginModel';
import { RegisterModel } from '../Models/RegisterModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { TokenModel } from '../Models/tokenModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl = 'https://localhost:44304/api/auth/';

  constructor(private httpClient:HttpClient) { }

login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
}
register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"/register",registerModel)
}
isAuthenticated(){
  if(localStorage.getItem("token")){
    return true;
  }
  else{
    return false;
  }
}
}
