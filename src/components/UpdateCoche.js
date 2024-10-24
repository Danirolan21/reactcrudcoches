import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class UpdateCoche extends Component {

  state = {
    status: false,
    coche: null
  }

  idCoche = this.props.idcoche;

  loadDetails = () => {
    let request = "api/Coches/FindCoche/" + this.idCoche;
    let url = Global.urlAPICoches + request;
    axios.get(url).then(response => {
        this.setState({
          coche: response.data
        })
    })
  }

  componentDidMount = () => {
    this.loadDetails();
  }

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  updateCoche = (e) => {
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

    let request = "api/coches/UpdateCoche";
    let url = Global.urlAPICoches + request;
    console.log();    
    axios.put(url, coche).then(response => {
      console.log("Updateado...");
      this.setState({
        status: true
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.status &&
          (
            <Navigate to='/'/>
          )
        }
        {
          this.state.coche &&
          (
            <div className='container'>
              <h1>Update Coche</h1>
              <form className='bg-dark p-3 text-light'>
                  <div className="row">
                      <div className="col-md-6 mb-3">
                          <label >Id Coche</label>
                          <input type="text" className="form-control bg-transparent text-light" value={this.state.coche.idCoche} ref={this.cajaId} disabled/>
                      </div>
                      <div className="col-md-6 mb-3">
                          <label >marca</label>
                          <input type="text" className="form-control bg-transparent text-light" defaultValue={this.state.coche.marca} ref={this.cajaMarca} required/>
                      </div>
                  </div>
                  <div className="mb-3">
                      <label >Modelo</label>
                      <input type="text" className="form-control bg-transparent text-light" defaultValue={this.state.coche.modelo} ref={this.cajaModelo} required/>
                  </div>
                  <div className="mb-3">
                      <label >Conductor</label>
                      <input type="text" className="form-control bg-transparent text-light" defaultValue={this.state.coche.conductor} ref={this.cajaConductor} required/>
                  </div>
                  <div className="mb-3">
                      <label >Imagen</label>
                      <input type="text" className="form-control bg-transparent text-light" defaultValue={this.state.coche.imagen} ref={this.cajaImagen} required/>
                  </div>
                  <button className="btn btn-primary btn-sm " onClick={this.updateCoche} role="button"> Modificar Coche </button>
              </form>
            </div>
          )
        }
      </div>
    )
  }
}
