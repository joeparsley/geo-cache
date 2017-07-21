import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geo } from '../geo.model';
import { GeoService } from '../geo.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-geo-detail',
  templateUrl: './geo-detail.component.html',
  styleUrls: ['./geo-detail.component.scss'],
  providers: [GeoService]
})
export class GeoDetailComponent implements OnInit {
  geoId: string;
  geoToDisplay;

 constructor(private route: ActivatedRoute, private location: Location, private geoService: GeoService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.geoId = urlParameters['id'];
    });
    this.geoToDisplay = this.geoService.getGeoById(this.geoId);
  }
}
