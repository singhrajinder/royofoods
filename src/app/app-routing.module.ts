import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WhatsTrendingComponent } from './whats-trending/whats-trending.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ParadiseComponent } from './paradise/paradise.component';
const routes: Routes = [
{
    path: '',
    component: HomeComponent,
  data : {
        title: 'App Dashboard '
    }
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'special-offer',
    component: SpecialOfferComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'whats-trending',
    component: WhatsTrendingComponent
  },
  {
    path: 'offer-card',
    component: OfferCardComponent
  },
  {
    path: 'category-card',
    component: CategoryCardComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'paradise',
    component: ParadiseComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
