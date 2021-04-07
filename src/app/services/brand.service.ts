import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Brand } from '../Models/brand';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44304/api/brands"
  constructor(private httpClient :HttpClient) { }

  getBrands() :Observable<ListResponseModel<Brand>>{

    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);

  }
  getBrandsById(id:number) :Observable<ListResponseModel<Brand>>{
    let newPath =this.apiUrl+"/getbyid?id="+id
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);

  }
  add(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",brand)
  }
  update(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/update",brand)
  }
}
