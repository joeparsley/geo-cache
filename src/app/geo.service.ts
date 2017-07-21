import { Injectable } from '@angular/core';
import { Geo } from './geo.model';
import { GEOS } from './mock-geos';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeoService {
  geos: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.geos = database.list('geos');
   }

  getGeos() {
    return this.geos;
  }

  getGeoById(geoId: number){
   for (var i = 0; i <= GEOS.length - 1; i++) {
     if (GEOS[i].id === geoId) {
       return GEOS[i];
     }
   }
 }

}
