import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Models/brand';
import { Color } from 'src/app/Models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImageService';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup
  colors: Color[];
  brands: Brand[];
  constructor(private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private carService:CarService,private colorService: ColorService,
    private brandService: BrandService,
    private carImageService: CarImageService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createCarAddForm()
  }

  createCarAddForm(){
    this.carAddForm = this.formBuilder.group({
      carImage:["",Validators.required],
      colorId:["",Validators.required],
      brandId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      findeks:["",Validators.required],
    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },(responseError) => {
        if (responseError.error.ValidationErrors != undefined) {
          for (
            let i = 0;
            i < responseError.error.ValidationErrors.length;
            i++
          ) {
            this.toastrService.error(
              responseError.error.ValidationErrors[i].ErrorMessage,
              'Doğrulama Hatası'
            );
          }
        } else {
          this.toastrService.error(responseError.error.Message, 'Uyarı');
        }
      }
    )

    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
}
