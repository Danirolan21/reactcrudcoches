import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {

  state = {
    status: false
  }

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  preventForm = (e) => {
    e.preventDefault();

    let idCoche = parseInt(this.cajaId.current.value);
    let marca = this.cajaMarca.current.value;
    let modelo = this.cajaModelo.current.value;
    let conductor = this.cajaConductor.current.value;
    let imagen = this.cajaImagen.current.value;

    let coche = {
      idCoche: idCoche,
      marca: marca,
      modelo: modelo,
      conductor: conductor,
      imagen: imagen
    }

    let request = "api/coches/InsertCoche";
    let url = Global.urlAPICoches + request;
    console.log(url);
    console.log(coche);    
    axios.post(url, coche).then(response => {
      console.log("Insertando...");
      this.setState({
        status: true
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.status ?
          (
            <Navigate to='/'/>
          ):
          (
            <div className='container'>
              <h1>Create Coche</h1>
              <form className='bg-dark p-3 text-light'>
                  <div className="row">
                      <div className="col-md-6 mb-3">
                          <label>Id Coche</label>
                          <input type="text" className="form-control bg-transparent text-light" ref={this.cajaId} required/>
                      </div>
                      <div className="col-md-6 mb-3">
                          <label>marca</label>
                          <input type="text" className="form-control bg-transparent text-light" ref={this.cajaMarca} required/>
                      </div>
                  </div>
                  <div className="mb-3">
                      <label>Modelo</label>
                      <input type="text" className="form-control bg-transparent text-light" ref={this.cajaModelo} required/>
                  </div>
                  <div className="mb-3">
                      <label>Conductor</label>
                      <input type="text" className="form-control bg-transparent text-light" ref={this.cajaConductor} required/>
                  </div>
                  <div className="mb-3">
                      <label>Imagen</label>
                      <input type="text" className="form-control bg-transparent text-light" ref={this.cajaImagen} required/>
                  </div>
                  <button className="btn btn-primary btn-sm " onClick={this.preventForm} role="button"> Crear Coche </button>
              </form>
            </div>
          )
        }
      </div>
    )
  }
}
