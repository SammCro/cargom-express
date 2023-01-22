import React, { Component } from 'react'

class AddDevice extends Component {
    render() {
    return (
      <div className='container ml-1'>
        <div className='card'>
            <div className='card-header'><h5>Cihaz Ekle</h5></div>
            <div className='card-body'>
                <form>
                <label className="d-block text-left" htmlFor='city'>Şehir</label>
                <select name='city' id='city' class="form-select d-block" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label className='mt-4 d-block text-left' htmlFor='city'>Son Kullanma Tarihi</label>
                <select name='city' id='city' class="form-select d-block" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                
                <label className='mt-4 d-block text-left' htmlFor='city'>Doluluk Oranı</label>
                <select name='city' id='city' class="form-select d-block" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type='submit' className='btn btn-warning w-100 mt-4'>Cihaz Ekle</button>
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default AddDevice;