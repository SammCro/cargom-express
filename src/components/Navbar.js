import React, { Component } from 'react'
import logo from '../imgs/beevision.jpg'
import {Link} from 'react-router-dom'


// It is the Navbar component that mounted in every page.
class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height :80}}>
            <a className="navbar-brand" style={{marginRight: 50}}>
                <span className='mr-2 font-weight-bold'>Cargom Express</span>
                <Link to= '/'>
                  <img src={logo}></img>
                </Link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <form className="form-inline my-2 my-lg-0" style={{width:'100%'}}  >
            <input className="form-control mr-sm-2" style={{width:'85%'}} type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-warning my-2 my-sm-0 mr-2" style={{width:90}} type="submit">Ara</button>
            <button className="btn btn-secondary my-2 my-sm-0" style={{width:90}} type="s8bmit">Giriş</button>
          </form>
        </div>
      </nav>
    )
  }
}


export default Navbar;
