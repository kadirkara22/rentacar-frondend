import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Models/car';
import { HttpClient } from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from 'src/app/services/carImageService';
import { CarImage } from 'src/app/Models/carImage';
import { environment } from 'src/environments/environment';
import { Color } from 'src/app/Models/color';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/app/Models/brand';
import { CarDetails } from 'src/app/Models/carDetails';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars:CarDetails[] = [];
  colors : Color[] =[]
  brands :Brand[] = []
  images:CarImage[]=[]
  dataLoaded =false;
  currentCar : CarDetails;
  filterText="";
  filterText1:number;
  filterText2:number;
  imageUrl = "https://localhost:44304/";
  constructor(private carService :CarService,
    private activatedRoute:ActivatedRoute,private brandService :BrandService,
    private colorService:ColorService,private toastrService :ToastrService,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"] && params["colorId"]){
        this.getCarFiltered(params["brandId"],params["colorId"]);
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
      else {
        this.getCars();
        this.getBrands();
        this.getColors();
        this.getImages();
      }

    })
  }

  getCars(){

    this.carService.getCars().subscribe(response =>{
      this.cars = response.data
      this.dataLoaded =true
    })

  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded =true
    })

  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded =true
    })
  }
  setCurrentCar(car:CarDetails){
    this.currentCar=car;
  }
  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data
    })
  }
  getCarFiltered(brandId:number,colorId:number){
    this.carService.getCarFiltered(brandId,colorId).subscribe(response =>{
      console.log(response)
      this.cars=response.data;
      if(this.cars.length == 0){
      this.toastrService.info('Araç Bulunmamaktadır.', 'Arama Sonucu');
    }
    })

  }
  getImages(){
    this.carImageService.getAll().subscribe(response =>{
      this.images = response.data
    })
  }

}
