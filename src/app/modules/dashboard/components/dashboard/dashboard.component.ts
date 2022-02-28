import { Component, OnInit } from '@angular/core'
import { FeatureCollection } from 'geojson'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  boundary?: {
    max_lat: number,
    max_lon: number,
    min_lat: number,
    min_lon: number,
  }
  featureCollection?: FeatureCollection
  changesetActorStatus = false
  switchLoading = false

  constructor() {
  }

  ngOnInit(): void {
  }


}
