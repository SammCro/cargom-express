import React, { Component } from 'react'
import UserConsumer from '../Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

var uniqid = require("uniqid");

const coordinatesOfCities = {
  "Artvin" : [41.1809,41.8208],
  "Antalya" : [36.892,30.6944],
  "Tokat" : [40.3235,36.5522]
}

class AddDevice extends Component {

    state = {
      // There are the default values if the user does not change the inputs.
      id : uniqid(),
      city : "Artvin",
      position : coordinatesOfCities.Artvin,
      hata : "Yok",
      hataKodu : "G",
      skt : "30-02-2023",
      doluluk : "az",
    }

    addDevice = (dispatch,e) =>{
        e.preventDefault();
        const{id,city,hata,hataKodu,skt,doluluk} = this.state;
        const position = coordinatesOfCities[city];

        const newDevice = {
          id : uniqid(),
          city,
          position,
          hata,
          hataKodu,
          skt,
          doluluk
        }
        axios.post("https://my-json-server.typicode.com/SammCro/cargom_express/devices",{"samet":"2"})
        dispatch({type:"ADD_DEVICE",payLoad:newDevice})
        toast.success("Yeni cihaz eklendi: "+city, {theme : 'colored'});
    }

    changeCity = (e) => {
      this.setState(
        {
          city : e.target.value
        }
      )
    }
    changeSkt = (e) => {
      this.setState(
        {
          skt : e.target.value
        }
      )
    }
    changeDoluluk = (e) => {
      this.setState(
        {
          doluluk : e.target.value
        }
      )
    }


    render() {
    const{city,skt,doluluk} = this.state;

    return (  
      
      <UserConsumer>
        {
          value=>{
            const{dispatch} = value;
            return(
              <div className='container ml-1'>
        <div className='card'>
            <div className='card-header'><h5 className='d-block text-left'>Cihaz Ekle</h5></div>
            <div className='card-body'>
                <form onSubmit={this.addDevice.bind(this,dispatch)}>
                <label className="d-block text-left form-label" htmlFor='city'>Şehir</label>
                <select name='city' id='city' value={city} onChange={this.changeCity} class="form-select d-block" aria-label="Default select example">
                    <option selected value="Artvin">Artvin</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Tokat">Tokat</option>
                </select>
                <label className='mt-4 d-block text-left form-label' htmlFor='date'>Son Kullanma Tarihi</label>
                <input type='date' value={skt} onChange={this.changeSkt} className="d-block text-left" name='date' id='date'></input>
                
                <label className='mt-4 d-block text-left form-label' htmlFor='capacity'>Doluluk Oranı</label>
                <select name='capacity' id='capacity' value={doluluk} onChange={this.changeDoluluk} class="form-select d-block" aria-label="Default select example">
                    <option selected value="az">Az</option>
                    <option value="orta">Orta</option>
                    <option value="cok">Çok</option>
                </select>
                <button type='submit'  className='btn btn-warning w-100 mt-4'>Cihaz Ekle</button>
                </form>
            </div>
        </div>
      </div>
            )
          }
        }
      </UserConsumer>
    )
  }
}

export default AddDevice;