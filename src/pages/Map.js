import '../style_sheets/map.css'
import React, { Component } from 'react'
import Navbar from '../components/Navbar';


class Map extends Component {
  render() {
    return (
      <div>
        <Navbar>
        </Navbar>

        <div className='row'> 
          <div className='col-lg-3 bar'>
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

          <div className='col-lg-9' style={{height:'100%'}}>
          </div>

        </div>        
      </div>
    )
  }
}

export default Map;
