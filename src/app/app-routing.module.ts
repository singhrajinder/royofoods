import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WhatsTrendingComponent } from './whats-trending/whats-trending.component';
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
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
