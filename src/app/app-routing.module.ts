import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
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
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
