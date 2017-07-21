import { Component, OnInit } from '@angular/core';
import { Geo } from '../geo.model';
import { Router } from '@angular/router';
import { GeoService } from '../geo.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-geocache',
  templateUrl: './geocache.component.html',
  styleUrls: ['./geocache.component.scss'],
  providers: [GeoService]
})
export class GeocacheComponent implements OnInit {
  geos: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

   constructor(private router: Router, private geoService: GeoService){}

  ngOnInit() {
    this.geos = this.geoService.getGeos();
  }

  goToDetailPage(clickedGeo) {
    this.router.navigate(['geos', clickedGeo.$key]);
  };
}
