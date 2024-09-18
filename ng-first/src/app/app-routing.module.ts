import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProductformComponent } from './productform/productform.component';


const routes: Routes = [{path:'',component:MainComponent},
              {path:'category',component:CategorylistComponent},
              {path:'login',component:LoginComponent},
              {path:'signup',component:SignupComponent},
              {path:'reset',component:ResetpasswordComponent},
              {path:'create-product',component:ProductformComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
