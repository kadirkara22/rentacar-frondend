import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../Models/color';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl='https://localhost:44304/api/colors';
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
       }
    getColorsById(carId:number) :Observable<ListResponseModel<Color>>{
     let newPath =this.apiUrl+"/getbyid?id="+carId
     return this.httpClient.get<ListResponseModel<Color>>(newPath);

      }
      add(color:Color):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",color)
      }
      update(color:Color):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"/update",color)
      }
}
