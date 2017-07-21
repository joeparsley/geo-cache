import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  baseUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?';

constructor(private http: Http) { }

getLatLngByAddress(streetNumber: string, streetName: string, city: string, state: string, postal: string) {
  console.log(this.http.get(`${this.baseUrl}address=${streetNumber}+${streetName}+${city}+${state}+${postal}`));
return this.http.get(`${this.baseUrl}address=${streetNumber}+${streetName}+${city}+${state}+${postal}`);
}
  getAddressByLatLng(lat: string, lng: string) {
  return this.http.get(`${this.baseUrl}latlng=${lat},${lng}`);
}

}
