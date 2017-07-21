import { Injectable } from '@angular/core';
import { Geo } from './geo.model';
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

  addGeo(newGeo: Geo) {
  this.geos.push(newGeo);
}

  getGeoById(geoId: string){
    return this.database.object('geos/' + geoId);
 }

}
