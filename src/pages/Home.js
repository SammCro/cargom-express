import React, { Component } from 'react'
import MainLogin from '../components/MainLogin';
import Footer from '../components/Footer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// It is the Home page, it shows the MainLogin and Footer components.
class Home extends Component {
  render() {
    return (
      <div>
        {toast.info("Beta Sürüm : Giriş yap butonu ile direkt haritaya gidebilirsiniz!",{theme: 'colored',position :'top-center'})}
        <MainLogin></MainLogin>
        <div style={{marginTop:'130px'}}>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default Home;
