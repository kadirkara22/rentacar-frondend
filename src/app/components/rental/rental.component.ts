import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetails } from 'src/app/Models/carDetails';
import { Rental } from 'src/app/Models/rental';
import { RentalsDto } from 'src/app/Models/rentalsDto';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:RentalsDto[] = [];
  dataLoaded =false;
  constructor(private rentalService : RentalService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){

    this.rentalService.getRentals().subscribe(response =>{
      this.rentals = response.data
      this.dataLoaded =true
    })

  }
}
