import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//add data serice
import { DataService } from './data.service';
//add router module
import { Routes,RouterModule } from '@angular/router';
//add animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//add forms module
import { FormsModule } from '@angular/forms';

//default modules
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core/src/metadata/directives';


const routes: Routes =[
  {
    path:'',
    component:HomeComponent
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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      //{enableTracing:true}
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
