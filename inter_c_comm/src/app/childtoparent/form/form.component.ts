import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  passData = new EventEmitter<{name:string,age:number,job:string,country:string}>;

  name!:string;
  age:number=0;
  job:string=''
  country:string=''

  OnSubmit(){
    this.passData.emit({name:this.name,age:this.age,job:this.job,country:this.country})
  }

}
