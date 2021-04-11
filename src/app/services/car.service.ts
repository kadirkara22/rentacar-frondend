import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../Models/car';
import { CarDetails } from '../Models/carDetails';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44304/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getdetails';
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbyid?id="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarDetail(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + 'cars/getcardetail?carId='+carId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }


  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getdetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getdetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarFiltered(brandId:number,colorId:number) :Observable<ListResponseModel<CarDetails>>{
    let newPath =this.apiUrl+"cars/getbybrandandcolor?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);

  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/update",car)
  }
  delete(id:number){
    let newPath =this.apiUrl+"cars/delete?id="+id
    return this.httpClient.post(newPath,id);
  }
}
