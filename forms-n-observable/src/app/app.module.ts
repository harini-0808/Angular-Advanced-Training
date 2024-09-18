import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ForbiddenPidDirective } from './forbidden-pid.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ProductFormComponent } from './server-comm-observable/product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './server-comm-observable/productlist/productlist.component';
@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    MainComponent,
    ForbiddenPidDirective,
    ReactiveFormComponent,
    FormbuilderComponent,
    ProductFormComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
