import React from 'react'
import {Link} from 'react-router-dom'
import NmitHome from './nmitHome'
import NmitCreateUser from './nmitCreateUser'
import NmitListUser from './nmitListUser'

export default function NmitNavBar() {
  return (
    <center>
    <nav>
        <Link to='/' element={<NmitHome/>}>Home</Link>
        <Link to='/nmit-list-user' element={<NmitListUser/>}>User List</Link>
        <Link to='/nmit-create-user' element={<NmitCreateUser/>}>Create User</Link>
    </nav>
    </center>
  )
}
