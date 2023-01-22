import React, { Component } from 'react'
import MainLogin from '../components/MainLogin';
import Footer from '../components/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <MainLogin></MainLogin>
        <div style={{marginTop:'130px'}}>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default Home;
