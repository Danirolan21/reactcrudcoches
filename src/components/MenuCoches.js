import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuCoches extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'><img src='https://cdn.icon-icons.com/icons2/1428/PNG/96/cargreenicon_98531.png' style={{width: "40px"}}/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/create'>Create</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to='/details' >Details</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to='/update' >Update</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to='/delete' >Delete</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
  }
}
