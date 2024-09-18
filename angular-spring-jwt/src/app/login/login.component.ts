import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JwtService } from '../jwt.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[RouterLink,FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 @ViewChild('form')
 form : any;
  username:string = ''
  password:string = ''

 constructor(private jwtService : JwtService){
}

  OnSubmit(e:any) {
    this.form.nativeElement.classList.remove('was-validated')
    if (!this.form.nativeElement.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
      
    }
    else{

      this.jwtService.authenticate(this.username,this.password)
    }

    this.form.nativeElement.classList.add('was-validated')
  }

 

}