import { Injectable } from '@angular/core';
import { Geo } from './geo.model';
import { GEOS } from './mock-geos';

@Injectable()
export class GeoService {

  constructor() { }

  getGeos() {
    return GEOS;
  }

  getGeoById(geoId: number){
   for (var i = 0; i <= GEOS.length - 1; i++) {
     if (GEOS[i].id === geoId) {
       return GEOS[i];
     }
   }
 }

}
