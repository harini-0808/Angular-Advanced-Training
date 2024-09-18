import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 @ViewChild('form')
 form : any;


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

}