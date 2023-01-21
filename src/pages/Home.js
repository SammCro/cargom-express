import React, { Component } from 'react'
import MainLogin from '../components/MainLogin';
import Footer from '../components/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <MainLogin></MainLogin>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home;
