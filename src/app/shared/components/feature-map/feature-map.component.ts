import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core'
import { FeatureCollection } from 'geojson'
import nb from '@nextbillion/nbmap-gl'
import { getStyle, MapAction, MAPBOX_TOKEN, MapStyleType } from '@utils/map-const'

@Component({
  selector: 'app-feature-map',
  templateUrl: './feature-map.component.html',
  styleUrls: ['./feature-map.component.scss']
})
export class FeatureMapComponent implements OnChanges {

  @Input() featureCollection: FeatureCollection | undefined
  @Input() layers: Array<any> = []
  @Input() actions: Array<MapAction> = []
  @Input() height = '500px'
  @Input() boundary?: {
    max_lat: number,
    max_lon: number,
    min_lat: number,
    min_lon: number,
  }

  @ViewChild('mapContainer')
  private mapContainer$!: ElementRef

  map!: any

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    nb.setApiKey(' ')
    this.map = new nb.maps.Map(this.mapContainer$.nativeElement, {
      accessToken: MAPBOX_TOKEN,
      container: this.mapContainer$.nativeElement,
      style: getStyle(MapStyleType.MapBoxStreet)?.style,
    })
  }
}
