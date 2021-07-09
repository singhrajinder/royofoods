import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
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
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
