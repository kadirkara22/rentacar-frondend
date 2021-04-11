import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/Models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup
  car:Car
  cars:Car[] = [];
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,
    private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
       this.getCarsById(params["carId"])

      }
    this.createCarAddForm();


  })
  }



  createCarAddForm(){
    this.carUpdateForm = this.formBuilder.group({
      carId:  ["", Validators.required],
      carImage:["",Validators.required],
      colorId:["",Validators.required],
      brandId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
    })
  }
  update(){
    this.carUpdateForm.patchValue({
      id: this.car.carId,

    })
    if(this.carUpdateForm.valid){
      let colorModel = Object.assign({},this.carUpdateForm.value)
      this.carService.update(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })

    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

  }
  getCarsById(id:number){
    this.carService.getCarsById(id).subscribe(response=>{
      this.car=response.data[0];

    })
  }


}
