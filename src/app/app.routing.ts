import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GeocacheComponent } from './geocache/geocache.component';
import { GeoDetailComponent } from './geo-detail/geo-detail.component';




const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'geo',
    component: GeocacheComponent
  },
  {
    path: 'geos/:id',
    component: GeoDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
