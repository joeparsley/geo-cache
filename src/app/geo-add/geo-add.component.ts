import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Geo } from '../geo.model';
import { GeoService } from '../geo.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-geo-add',
  templateUrl: './geo-add.component.html',
  styleUrls: ['./geo-add.component.scss'],
  providers: [GeoService, ApiService]
})
export class GeoAddComponent implements OnInit {
  toggle: string;

  constructor(private geoService: GeoService, private apiService: ApiService) { }

  ngOnInit() {
  }



  addGeoCache(form: NgForm) {
    var result = form.value;
    var newGeo;

    if (result.toggle === 'latlng') {
      this.apiService.getAddressByLatLng(result.lat, result.lng).subscribe((res) => {
        var address = res.json().results[0].formatted_address;


        newGeo = new Geo(result.first, result.last, address, result.lat, result.lng);

        this.geoService.addGeo(newGeo);

      });
    } else if (result.toggle === 'address') {
      this.apiService.getLatLngByAddress(result.streetNumber, result.street, result.city, result.state, result.postal).subscribe((res) => {

        var address = res.json().results[0].formatted_address;
        var lat = res.json().results[0].geometry.location.lat;
        var lng = res.json().results[0].geometry.location.lng;

        newGeo = new Geo(result.first, result.last, address, lat, lng)

        this.geoService.addGeo(newGeo);
      });
    }
  }

 toggleDisplay(select) {
  this.toggle = select;
}

}
