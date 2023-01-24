import '../style_sheets/Footer.css'
import React, { Component } from 'react'


//It is the footer component.
class Footer extends Component {
  render() {
    return (
      <div className='container footer' style={{textAlign:'center',alignItems:'center'}}>
        <p className='mt-0'>
            <a target={'_blank'} href='https://www.linkedin.com/in/ilkay-samet-%C3%B6zt%C3%BCrk-9971841a1/'>LinkedIn  </a>
            <span>| </span>
            <a target={'_blank'} href='https://github.com/SammCro'>Github  </a>
            <span>| </span>
            <a target={'_blank'} href='https://www.instagram.com/ilkayysamet/'>Instagram</a>
        </p>
        <p className='copyright mt-0'>
        @Copyright İlkay Samet Öztürk
        </p>
      </div>
    )
  }
}

export default Footer;
