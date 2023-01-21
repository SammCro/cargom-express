import '../style_sheets/map.css'
import React, { Component } from 'react'
import Footer from '../components/Footer'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'


class Map extends Component {
  render() {
    const main = [39,34]
    const position = [39.925533, 32.866287]
    const position2 = [35.925533, 32.866287]
    return (
      <div>
        <div className='row'> 
          <div className='col-lg-3 bar'>
            <div className='titles'>
              <p>
                Capsule
              </p>
              <p>
                Araçlar
              </p>
              <p> 
                Teknik Servis
              </p>
              <p>
                Servisler
              </p>
            </div>
            <div className='titlesFooter'>
              <Footer></Footer>
            </div>
          </div>

          <div className='col-lg-9 map'>
            <MapContainer  center={main} zoom={6.5} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
                <Marker position={position}>
                  <Popup>
                      <div className='container'>
                        <p>samet</p> 
                        <h2>samet</h2>
                      </div>
                  </Popup>
                </Marker>
                <Marker position={position2}>
                  <Popup>
                      <div className='container'>
                        <p>samet</p> 
                        <h2>samet</h2>
                      </div>
                  </Popup>
                </Marker>

            </MapContainer>
          </div>

        </div>        
      </div>
    )
  }
}

export default Map;
