import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderModule } from 'angular-image-slider';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WhatsTrendingComponent } from './whats-trending/whats-trending.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoriesComponent } from './categories/categories.component';
import { ParadiseComponent } from './paradise/paradise.component';
import { TheCapitalGrilleComponent } from './the-capital-grille/the-capital-grille.component';
import { ViewAllCardComponent } from './components/view-all-card/view-all-card.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantsComponent,
    SpecialOfferComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    WhatsTrendingComponent,
    OfferCardComponent,
    CategoryCardComponent,
    CategoriesComponent,
    ParadiseComponent,
    TheCapitalGrilleComponent,
    ViewAllCardComponent,
    FoodCardComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
