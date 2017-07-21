import { Component, OnInit } from '@angular/core';
import { Geo } from '../geo.model';

@Component({
  selector: 'app-geocache',
  templateUrl: './geocache.component.html',
  styleUrls: ['./geocache.component.scss']
})
export class GeocacheComponent implements OnInit {
  geos: Geo[] = [
    new Geo("Joe Parsley","Oregon","14817 Glen Oak Rd Oregon City, OR 97045","45.317103","-122.562337")
  ];

  constructor() { }

  ngOnInit() {
  }

}
