import React from 'react'
import {Link} from 'react-router-dom'

export default function nmitNavLink() {
  return (
    <div>
        <center>
        <ul>
            <Link to={"/trang-chu"} className='m-3'>Trang Chủ</Link>
            <Link to={"/gioi-thieu"} className='m-3'>Giới Thiệu</Link>
            <Link to={"/lien-he"} className='m-3'>Liên Hệ</Link>
            <Link to={"/tin-tuc"} className='m-3'>Tin Tức</Link>
            <Link to={"/danh-sach-san-pham"} className='m-3'>Sản Phẩm</Link>
            <Link to={"/them-san-pham"}>Thêm Sản Phẩm</Link>
        </ul>
        </center>
    </div>
  )
}
