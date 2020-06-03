import * as React from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker } from 'react-windy-leaflet'
import { WINDY_API_KEY } from '../../config'

import './app.css'

interface State {
  lat: number
  lng: number
  zoom: number
  overlay: string
  heading: number
}

class App extends React.Component<any> {
  public state: State = {
    lat: 52.3718294,
    lng: 4.9073164,
    zoom: 11,
    overlay: 'wind',
    heading: 191,
  }

  public render() {
    const { lat, lng, zoom, overlay, heading } = this.state
    const position = [lat, lng]
    const scale = 3

    const vesselMarkerIcon = new L.Icon({
      iconUrl: `/markers/Boat_${heading}.png`,
      iconSize: [92 / scale, 88 / scale],
      iconAnchor: [46 / scale, 44 / scale],
      popupAnchor: [46 / scale, 44 / scale],
      shadowUrl: `/markers/Shadow_${heading}.png`,
      shadowSize: [92 / scale, 88 / scale],
      shadowAnchor: [46 / scale, 44 / scale],
    })

    return (
      <main>
        <Map
          className="leaflet-container"
          windyKey={WINDY_API_KEY}
          windyLabels={false}
          windyControls={false}
          overlay={overlay}
          overlayOpacity={zoom > 11 ? 1 : 0.5}
          particlesAnim={true}
          zoom={zoom}
          center={position}
          removeWindyLayers={true}
          mapElements={
            <React.Fragment>
              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
              <TileLayer url="http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png" />
              <Marker position={position} icon={vesselMarkerIcon} />
            </React.Fragment>
          }
        />
      </main>
    )
  }
}

export default App
