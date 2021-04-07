import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Models/brand';
import { Car } from 'src/app/Models/car';
import { CarDetails } from 'src/app/Models/carDetails';
import { CarImage } from 'src/app/Models/carImage';
import { Color } from 'src/app/Models/color';
import { Rental } from 'src/app/Models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImageService';
import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars:CarDetails[]=[];
  images : CarImage[]=[];
  ImagePaths: string[] = [];
  filterText="";
  imageUrl = "https://localhost:44304/";

  constructor(private carService : CarService,
    private activatedRoute:ActivatedRoute,
    private ImageService : CarImageService) { }

  ngOnInit(): void {
    this.getCars()
    this.getImages();
}
getCars(){

  this.carService.getCars().subscribe(response =>{
    this.cars = response.data
  })

}
getImages(){
  this.ImageService.getAll().subscribe(response =>{
    this.images = response.data
  })
}

}
