import '../style_sheets/map.css'
import React, { Component } from 'react'
import Footer from '../components/Footer'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import UserConsumer from '../Context'

class Map extends Component {
  
  render() {
    const  cokDolu = <i className="fa-solid fa-circle" style={{color:'red'}}></i>;
    const  ortaDolu = <i className="fa-solid fa-circle" style={{color:'orange'}}></i>;
    const azDolu = <i className="fa-solid fa-circle" style={{color:'green'}}></i>;
    const main = [39,34]

    const iconSelector = (doluluk) =>{
      switch (doluluk) {
        case "cok":
            return cokDolu;
        case "orta":
            return ortaDolu;
        case "az":
            return azDolu;
        default:
            return null;
      }
    }

    const errorWriter= (hata) =>{
      if(hata ==="G")
        return null;
      else{
        return "-- Kodu: "+hata;
      }  
    }
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
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                
                <UserConsumer>
                  {
                    value =>{
                      const{devices} = value;
                      return(
                        devices.map(
                          device=>{
                            return(
                              <Marker position={device.position}>
                                <Popup>
                                  <div className='container pop-up'>
                                      <p>Hata Durumu : {device.hata}  {errorWriter(device.hataKodu)}</p>
                                      <p>Son Kullanım Tarihi: {device.skt}</p>
                                      <p>Doluluk Oranı: {iconSelector(device.doluluk)}</p>
                                  </div>
                                </Popup>
                              </Marker>
                            )
                          }
                        )
                        
                      )
                    }
                  }
                </UserConsumer>
                

            </MapContainer>
          </div>

        </div>        
      </div>
    )
  }
}

export default Map;
