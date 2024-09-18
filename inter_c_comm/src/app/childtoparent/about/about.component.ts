import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name:string = '';
  age!:number;
  job:string=''
  country:string=''

  fillIn(data:any){
    this.name  = data.name
    this.age = data.age
    this.job = data.job
    this.country = data.country
  }
}
