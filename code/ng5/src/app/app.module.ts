import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//add data serice
import { DataService } from './data.service';
//add router module
import { Routes,RouterModule } from '@angular/router';
//add animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//add forms module
//import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule,  FormsModule,  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
//import HttpClient
import { HttpClientModule } from '@angular/common/http';

//default modules
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core/src/metadata/directives';
import { CustomerComponent } from './customer/customer.component';
import { RestfullComponent } from './restfull/restfull.component';


const routes: Routes =[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'customer',
    component: CustomerComponent
  },
  {
    path:'restfull',
    component: RestfullComponent
  },
  {
    path:'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerComponent,
    RestfullComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      //{enableTracing:true}
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
