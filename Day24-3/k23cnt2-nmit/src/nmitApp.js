import React from 'react'
import { BrowserRouter as NmitRouter, Route, Routes } from 'react-router-dom'
import NmitNavBar from './components/nmitNavBar'
import NmitHome from './components/nmitHome'
import NmitCreateUser from './components/nmitCreateUser'
import NmitEditUser from './components/nmitEditUser'
import NmitListUser from './components/nmitListUser'

export default function nmitApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>Nguyễn Minh Tuấn - K23CNT2 - 2310900114</h1>
      <hr/>
      <NmitRouter>
        <NmitNavBar/>
        <Routes>
          <Route path='/' element={<NmitHome />} />
          <Route path='/nmit-list-user' element={<NmitListUser/>} />
          <Route path='/nmit-create-user' element={<NmitCreateUser/>} />
          <Route path='/nmit-edit-user' element={<NmitEditUser/>} />
          <Route path='/nmit-edit-user/:id' element={<NmitEditUser />} />
        </Routes>
      </NmitRouter>
    </div>
  )
}
