import { Map as MapBox, MapLayerEventType, Style } from 'mapbox-gl'

export enum MapStyleType {
  NBStreet,
  MapBoxStreet
}

export interface MapStyle {
  label: string
  style: string | Style
  visible: boolean
}

const mapStyleStore = new Map<MapStyleType, MapStyle>([
  [MapStyleType.NBStreet, {
    label: 'NB Streets',
    style: '',
    visible: true
  }],
  [MapStyleType.MapBoxStreet, {
    label: `Mapbox Streets`,
    style: '',
    visible: false,
  }]
])

export function getStyle(style: MapStyleType): MapStyle | undefined {
  return mapStyleStore.get(style)
}

export function getStyleList(): MapStyle[] {
  return Array.from(mapStyleStore.values()).filter(mapStyle => mapStyle.visible)
}

export const MAPBOX_TOKEN = ''

export interface MapAction {
  event: keyof MapLayerEventType,
  layerId: string,
  handler: (this: MapBox, e: any) => void
}
