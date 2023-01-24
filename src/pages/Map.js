import '../style_sheets/map.css'
import Footer from '../components/Footer'
import AddDevice from '../components/AddDevice'
import React, { Component } from 'react'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import L from 'leaflet'
import UserConsumer from '../Context'
import Notifications from '../components/Notifications'


//Default marker is changed to the icon of the company.
const markerIcon = new L.icon({
  iconUrl : require("../imgs/beeIcon.jpg"),
  iconSize : [60,60]
})
class Map extends Component {

  // This function works if the user want to delete a device and it use dispatch function of the Context. 
  deleteDevice = (id,dispatch,e) =>{
    e.preventDefault();
    dispatch({type : "DELETE_DEVICE",payLoad : id})
  }
  render() {
    //There are 3 options with capacity, Full,Medium and Low. It is specificied with the color.
    const  cokDolu = <i className="fa-solid fa-circle fa-1x" style={{color:'red'}}></i>;
    const  ortaDolu = <i className="fa-solid fa-circle fa-1x" style={{color:'orange'}}></i>;
    const azDolu = <i className="fa-solid fa-circle fa-1x" style={{color:'green'}}></i>;
    
    //It is the center of the map.
    const main = [39,34]

    // This function returns an icon that specified in the devices capacity. 
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
    // This functions return the ERROR code if there is an error on device otherwise it returns null
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
          <Notifications></Notifications>
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
            <AddDevice></AddDevice>
            <div className='titlesFooter' style={{marginTop:'55px'}}>
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
                      const{devices,dispatch} = value;
                      return(
                        devices.map(
                          device=>{
                            return(
                              <Marker position={device.position} icon = {markerIcon}>
                                <Popup>
                                  <div className='container pop-up'>
                                      <p>Hata Durumu : {device.hata}  {errorWriter(device.hataKodu)}</p>
                                      <p>Son Kullanım Tarihi: {device.skt}</p>
                                      <p>Doluluk Oranı: {iconSelector(device.doluluk)}</p>
                                      <button onClick={this.deleteDevice.bind(this,device.id,dispatch)} className='btn w-100 btn-danger'>Cihazı Kaldır</button>
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
