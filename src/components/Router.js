import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuCoches from './MenuCoches'
import HomeCoches from './HomeCoches'
import CreateCoche from './CreateCoche'
import UpdateCoche from './UpdateCoche'
import DeleteCoche from './DeleteCoche'
import DetailsCoche from './DetailsCoche'

export default class Router extends Component {
  render() {
  
    function DetailsCocheElement() {
      let {idcoche} = useParams();
      return (<DetailsCoche idcoche={idcoche}/>)
    }
    function UpdateCocheElement() {
      let {idcoche} = useParams(); 
      return (<UpdateCoche idcoche={idcoche}/>)
    }
    function DeleteCocheElement() {
      let {idcoche} = useParams();
      return (<DeleteCoche idcoche={idcoche}/>)
    }
  
    return (
      <BrowserRouter>
        <MenuCoches/>
        <Routes>
            <Route path='/' element={<HomeCoches/>}/>
            <Route path='/create' element={<CreateCoche/>}/>
            <Route path='/details/:idcoche' element={<DetailsCocheElement/>}/>
            <Route path='/update/:idcoche' element={<UpdateCocheElement/>}/>
            <Route path='/delete/:idcoche' element={<DeleteCocheElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
