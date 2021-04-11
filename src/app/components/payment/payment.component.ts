import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/Models/payment';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAddForm :FormGroup;
  isSaved: boolean = false
  id:number
  creditCardId: number;
  creditCards: Payment[] = [];
  constructor(private formBuilder:FormBuilder,private paymentService:PaymentService,
    private toastrService:ToastrService,
    private localStorage:LocalStorageService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.createPaymentAddForm()
    this.add()
  }

  createPaymentAddForm(){
    this.paymentAddForm=this.formBuilder.group({
      userId:[this.id,Validators.required],
      cardNumber:["",Validators.required],
      expiryDate:["",Validators.required],
      securityCode:["",Validators.required],

    })
  }
  add(){
    if(this.paymentAddForm.valid){
      let paymentModel = Object.assign({},this.paymentAddForm.value)
      this.paymentService.add(paymentModel).subscribe(data=>{
        this.toastrService.success("Ödeme İşlemi Tamamlandı","Başarılı")
      },responseError=>{
        if(responseError.errors.Errors.length>0){
          for (let i = 0; i < responseError.errors.Errors.length; i++) {
            this.toastrService.error(responseError.errors.Errors[i].ErrorMessage,"Doğrulama Hatası")

          }

        }
      })

    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }

  }

  addCardNumber(payment : Payment){
    this.paymentService.add(payment).subscribe(response => {
      this.toastrService.success(response.message)
    })
}
getCardNumberFromDatabase() {
  this.id = parseInt(this.localStorage.getItem("id")!!)
  console.log(this.id)
  this.paymentService.getCardNumber(this.id).subscribe(response => {
    if(response.data != null) {
      this.paymentAddForm.controls["cardNumber"].setValue(response.data)
      this.isSaved = true
    }
  })
}
getCards() {
  this.paymentService.getCardNumber(this.id).subscribe((response) => {
    if (response) {
      this.creditCards = response.data;
    }
  });
}
cardChange(event: any) {
  let selectedCard = this.creditCards.find((c) => c.id == this.creditCardId);
  this.paymentAddForm.get('cardNumber')?.setValue(selectedCard?.cardNumber);
  this.paymentAddForm
    .get('expiryDate')
    ?.setValue(selectedCard?.expiryDate);
  this.paymentAddForm
    .get('securityCode')
    ?.setValue(selectedCard?.securityCode);

}
}
