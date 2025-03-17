import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NmitNavNar from './component/nmitNavNar'
import NmitHome from './component/nmitHome'
import NmitAbout from './component/nmitAbout'
import NmitContact from './component/nmitContact'
import NmitListUser from './component/nmitListUser'
import NmitFormUser from './component/nmitFormUser'

export default function NmitApp() {

  const listUsers  = [
    {id:"SV001", nmitFullName:"Nguyễn Minh Tuấn", nmitUserName:"ChungChung", nmitPass:"123456a@"},
    {id:"SV002", nmitFullName:"Nguyễn Văn A", nmitUserName:"QuanTrinh", nmitPass:"123456a@"},
    {id:"SV003", nmitFullName:"Nguyễn Thị B", nmitUserName:"QuangA", nmitPass:"123456a@"},
  ]

  const[ nmitUsers, setnmitUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const nmitHandleAdd = (nmitParam)=>{
    console.log("nmitHandleAdd:", nmitParam);
    
    setnmitUsers(prev =>{ 
      return [
        ...prev,
        nmitParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Nguyễn Minh Tuấn - K23CNT2]</h1>
        <hr/>
        <Router>
            <NmitNavNar/>
            <Routes>
                <Route path='/' element = {<NmitHome />} />
                <Route path='/about' element = {<NmitAbout />} />
                <Route path='/contact' element = {<NmitContact />} />
                <Route path='/list-user' element = {<NmitListUser  rendernmitUsers={nmitUsers}/>} />
                <Route path='/create-user' element = {<NmitFormUser  onnmitAddNew={nmitHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}