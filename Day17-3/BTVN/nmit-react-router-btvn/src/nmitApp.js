import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NmitSanPham from './components/nmitSanPham';
import NmitGioiThieu from './components/nmitGioiThieu';
import NmitLienHe from './components/nmitLienHe';
import NmitHome from './components/nmitHome';
import NmitTinTuc from './components/nmitTinTuc';
import NmitNavLink from './components/nmitNavLink';

function nmitApp() {
  return (
    <div>
      <center><h1>React Router Dom - ROG Demo - [Nguyễn Minh Tuấn - K23CNT2]</h1></center>
      <hr/>
      <Router>
          <NmitNavLink/>
            <Routes>
              <Route path='/trang-chu' element = {<NmitHome />} />
              <Route path='/gioi-thieu' element = {<NmitGioiThieu />} />
              <Route path='/lien-he' element = {<NmitLienHe />} />
              <Route path='/tin-tuc' element = {<NmitTinTuc />} />
              <Route path='/danh-sach-san-pham' element = {<NmitSanPham/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default nmitApp;