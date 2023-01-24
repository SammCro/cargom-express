import React, { Component } from 'react'
import '../style_sheets/MainLogin.css'
import { Link } from 'react-router-dom';

class MainLogin extends Component {
  render() {
    return (
      <div className='container 75vh'>
        <h1>
            Cargom Express
        </h1>
        <div className='row mt-5'>
         <div className='col-md-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Giriş Yap</h3>
                    </div>
                    <div className='card-body'>
                        <form >
                            <label className='mb-2 d-block' htmlFor='mailG'>Email</label>
                            <input className='mb-3 form-control' name='mailG' id='mailG' placeholder='Email'></input>

                            <label className='mb-2 d-block' htmlFor='passwordG'>Şifrenizi Girin</label>
                            <input className='mb-3 form-control' name= 'passwordG' id='passwordG' placeholder='Parola'></input>
                            <Link to ='/cargom_express/map'>
                                <button type='submit' className='btn w-100 btn-warning'>Giriş Yap</button>
                            </Link>
                        </form>
                    </div>
                </div>   
        </div>
        <div className='col-md-2' style={{textAlign:'center'}}>
            <h2>veya</h2>
        </div>
        <div className='col-md-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Kayıt Ol</h3>
                    </div>
                    <div className='card-body'>
                        <form>
                            <label className='mb-2 d-block' htmlFor='nickname'>Kullanıcı Adı</label>
                            <input className='mb-3 form-control' name= 'nickname' id='nickname' placeholder='Kullancı Adı'></input>

                            <label className='mb-2 d-block' htmlFor='mail'>Email</label>
                            <input className='mb-3 form-control' name='mail' id='mail' placeholder='Email'></input>
                            
                            <label className='mb-2 d-block' htmlFor='password'>Şifrenizi Girin</label>
                            <input className='mb-3 form-control' name= 'password' id='password' placeholder='Parola'></input>

                            <label className='mb-2 d-block' htmlFor='passwordCheck'>Şifrenizi Tekrar Girin</label>
                            <input className='mb-3 form-control' name= 'passwordCheck' id='passwordCheck' placeholder='Parola Tekrar'></input>

                            <button type='submit' className='btn w-100 btn-warning'>Kayıt Ol</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default MainLogin;
