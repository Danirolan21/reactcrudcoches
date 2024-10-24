import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class HomeCoches extends Component {

    state = {
        coches: []
    }

    deleteCoche = (idCoche) => {
        let request = "api/Coches/DeleteCoche/" + idCoche;
        let url = Global.urlAPICoches + request;
        axios.delete(url).then(response => {
            console.log("Borrado Cohe con Id: " + idCoche);
            this.loadCoches();
        })
    }

    loadCoches = () => {
        let request = "api/Coches";
        let url = Global.urlAPICoches + request;
        axios.get(url).then(response => {
            this.setState({
                coches: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

  render() {
    return (
      <div className='container'>
        <h1 className='fst-italic text-center'>Home Coches</h1>
        <table className='table table-dark table-striped table-bordered text-center fst-italic'>
            <thead>
                <tr>
                    <th>Others</th>
                    <th>IdCoche</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.coches.map((coche, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <NavLink to={'/details/' + coche.idCoche} className='btn btn-info mt-2 mb-2'>Details</NavLink>
                                    <NavLink to={'/update/' + coche.idCoche} className='btn btn-warning mb-2'>Update</NavLink>
                                    <button onClick={() => this.deleteCoche(coche.idCoche)} className='btn btn-danger'>Delete</button>
                                </td>
                                <td>{coche.idCoche}</td>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen} className='rounded-5' style={{width: "150px", height: "150px"}}/></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
