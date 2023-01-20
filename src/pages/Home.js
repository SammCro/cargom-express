import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import MainLogin from '../components/MainLogin';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <MainLogin></MainLogin>
      </div>
    )
  }
}

export default Home;
