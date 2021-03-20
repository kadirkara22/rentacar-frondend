import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/Models/rental';
import { RentalsDto } from 'src/app/Models/rentalsDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentalDetails: RentalsDto[] = [];
  dataLoaded: boolean = false;
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {

  }

}
