import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/Models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup
  color:Color
  colors:Color[] = [];
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,
    private colorService:ColorService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
       this.getColorsById(params["colorId"])

      }
    this.createColorUpdateForm();


  })}
  getColors(){

    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data
    })

  }
  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      id:  ["", Validators.required],
      colorName:["",Validators.required],
    })
  }
  update(){
    this.colorUpdateForm.patchValue({
      id: this.color.colorId,

    })
    if(this.colorUpdateForm.valid){
      let colorModel = Object.assign({},this.colorUpdateForm.value)
      this.colorService.update(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })

    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

  }
  getColorsById(id:number){
    this.colorService.getColorsById(id).subscribe(response=>{
      this.color=response.data[0];

    })
  }

}
