import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @ViewChild('form')
  form : any;
  @ViewChild('psswd')
  password : any;
  @ViewChild('repsswd')
  repassword : any;
  
 
 
  constructor(){
 }
 
   OnSubmit(e:any) {
     this.form.nativeElement.classList.remove('was-validated')
     if (!this.form.nativeElement.checkValidity()) {
       e.preventDefault()
       e.stopPropagation()
       
     }
 
     this.form.nativeElement.classList.add('was-validated')
   }

   validatePsswd(){
      if(this.password.nativeElement.value!=this.repassword.nativeElement.value){
        console.log(this.password.nativeElement.value)
        this.repassword.nativeElement.setCustomValidity('error')
      }
      else
      this.repassword.nativeElement.setCustomValidity('')
   }
}
