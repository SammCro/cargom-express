import React, { Component } from 'react'

class AddDevice extends Component {
    render() {
    return (
      <div className='container ml-1'>
        <div className='card'>
            <div className='card-header'><h5 className='d-block text-left'>Cihaz Ekle</h5></div>
            <div className='card-body'>
                <form>
                <label className="d-block text-left" htmlFor='city'>Şehir</label>
                <select name='city' id='city' class="form-select d-block" aria-label="Default select example">
                    <option selected>Bir Şehir Seçiniz</option>
                    <option value="1">Ankara</option>
                    <option value="2">İzmir</option>
                    <option value="3">Konya</option>
                </select>
                <label className='mt-4 d-block text-left' htmlFor='date'>Son Kullanma Tarihi</label>
                <input type='date' className="d-block text-left" name='date' id='date'></input>
                
                <label className='mt-4 d-block text-left' htmlFor='capacity'>Doluluk Oranı</label>
                <select name='capacity' id='capacity' class="form-select d-block" aria-label="Default select example">
                    <option selected value="1">Az</option>
                    <option value="2">Orta</option>
                    <option value="3">Çok</option>
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