import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';



import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'catalog',component:ProductlistComponent},
    {path:'product-form',component:ProductFormComponent},
];
