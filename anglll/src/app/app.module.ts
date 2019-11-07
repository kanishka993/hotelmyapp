import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { Hotel1Component } from './component/hotel1/hotel1.component';
import { Hotel2Component } from './component/hotel2/hotel2.component';
import { Tblargh1Component } from './component/tblargh1/tblargh1.component';
//import { Vfreeh1Component } from './component/vfreeh1/vfreeh1.component';
import {ShoppingCartModule} from 'ng-shopping-cart';
import { NgShoppingCartComponent } from './component/ng-shopping-cart/ng-shopping-cart.component';
import{AuthService} from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';






const applicationRoute:Routes=[
  {path:'register',component:RegisterComponent,} ,
  {path:'hotel',component:HotelComponent,} ,
  {path:'hotel1',component:Hotel1Component,} ,
  {path:'tblargh1',component:Tblargh1Component,} ,
  {path:'ng-shopping-cart',component:NgShoppingCartComponent},
 // {path:'vfreeh1',component:Hotel1Component,} ,
  {path:'hotel2',component:Hotel1Component,} ,
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HotelComponent,
    Hotel1Component,
    Hotel2Component,
    Tblargh1Component,
   // Vfreeh1Component,
    NgShoppingCartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
   // ShoppingCartModule.forChild(),
  RouterModule.forRoot(applicationRoute)
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
