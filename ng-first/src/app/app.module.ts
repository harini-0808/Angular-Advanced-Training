import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProductformComponent } from './productform/productform.component';
@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    CategorylistComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    ProductformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
