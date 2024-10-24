import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetailsCoche extends Component {

  state = {
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

  render() {
    return (
      <div>
        <NavLink to='/'>Back to list</NavLink>
        <h1>Details Coche</h1>
          {
            this.state.coche &&
            (
              <ul className='list-group'>
                <li className='list-group-item active'>IdCoche: {this.state.coche.idCoche}</li>
                <li className='list-group-item'>Marca: {this.state.coche.marca}</li>
                <li className='list-group-item'>Modelo: {this.state.coche.modelo}</li>
                <li className='list-group-item'>Conductor: {this.state.coche.conductor}</li>
                <li className='list-group-item'>Imagen: <img src={this.state.coche.imagen} className='rounded-5' style={{width: "150px", height: "150px"}}/></li>
              </ul>
            )
          }
      </div>
    )
  }
}
