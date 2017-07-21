import { Component, OnInit } from '@angular/core';
import { Geo } from '../geo.model';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-geo-add',
  templateUrl: './geo-add.component.html',
  styleUrls: ['./geo-add.component.scss'],
  providers: [GeoService]
})
export class GeoAddComponent implements OnInit {

  constructor(private geoService: GeoService) { }

  ngOnInit() {
  }

  submitForm(first: string, last: string, address: string, city: string, state: string, postal: string) {
   var newGeo: Geo = new Geo(first, last, address, city, state, postal);
   this.geoService.addGeo(newGeo);
 }

}
