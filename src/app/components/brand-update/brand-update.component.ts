import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup
  brand:Brand
  brands:Brand[] = [];
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,
    private brandService:BrandService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
       this.getBrandsById(params["brandId"])

      }
    this.createBrandAddForm();
    this.getBrands();

  })}
  getBrands(){

    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data
    })

  }
  createBrandAddForm(){
    this.brandUpdateForm = this.formBuilder.group({
      id:  ["", Validators.required],
      brandName:["",Validators.required],
    })
  }
  update(){
    this.brandUpdateForm.patchValue({
      id: this.brand.brandId,

    })
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({},this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })

    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

  }
  getBrandsById(id:number){
    this.brandService.getBrandsById(id).subscribe(response=>{
      this.brand=response.data[0];

    })
  }
}
