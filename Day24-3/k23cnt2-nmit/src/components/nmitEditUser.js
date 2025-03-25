import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function NmitEditUser() {
  const nmitUser = {
    id:0,
    'nmit_name':'',
    'nmit_email':'',
    'nmit_phone':'',
    'nmit_active':true
  }
  // api
  const nmitApiUrl = "https://67e0d1e758cc6bf7852304f3.mockapi.io/nmit/nmit_users";
  // lấy biến id trên url;
  const {id} = useParams(); // <Route path='/edit-user/:id' element={<NmitEditUser />} />; navigate(`/edit-user/${nmitId}`);
  // Khởi tạo state cho componnet
  const [nmit_editUser, setNmitEditUser] = useState(nmitUser)
  // đọc dữ liệu từ api và set cho state: nmit_editUser
  useEffect(()=> {
    axios
      .get(`${nmitApiUrl}/${id}`)
      .then(nmit_response => {
        const editUser = nmit_response.data;
        console.log(editUser);
        setNmitEditUser(editUser);
      })
      .catch((error) => {
        console.error('Lỗi khi tải công việc:', error);
      });
  },[id])
 
  // Hàm xử lý khi người dùng thay đổi trạng thái Active (radio button)
  const nmitHandleRadioChange = (ev) => {
    setNmitEditUser({
      ...nmit_editUser,
      nmit_active: ev.target.value === "true", // Cập nhật trạng thái nmit_active theo giá trị của radio button
    });
  };
  // tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
  const navigate = useNavigate();

  // Khi người dùng nhấn nút submit (cập nhật dữ liệu) => lấy dữ liệu từ form, post vào api
  // Hàm cập nhật những thay đổi trên form vào api
  const nmitHandleSubmit = (event)=>{
    event.preventDefault()
    axios
      .put(`${nmitApiUrl}/${id}`, nmit_editUser)
      .then((nmit_response) => {
        alert('Cập nhật thành công!');
        navigate('/nmit-list-user'); // Sau khi lưu, chuyển về trang danh sách
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật công việc:', error);
      });
  }

  // khi click vào nút back
  const nmitHandleBack=(event)=>{
    event.preventDefault();
    navigate('/nmit-list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Sửa thông tin User</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="nmit_name" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="nmit_name"
              name="nmit_name"
              value={nmit_editUser.nmit_name}
              onChange={(ev)=>setNmitEditUser({...nmit_editUser,nmit_name:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nmit_email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="nmit_email"
              name="nmit_email"
              value={nmit_editUser.nmit_email}
              onChange={(ev)=>setNmitEditUser({...nmit_editUser,nmit_email:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nmit_phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-6">
            <input
              type="tel"
              className="form-control"
              id="nmit_phone"
              name="nmit_phone"
              value={nmit_editUser.nmit_phone}
              onChange={(ev)=>setNmitEditUser({...nmit_editUser,nmit_phone:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nmit_active" className="col-sm-2 col-form-label">
            Active
          </label>
          <div className="col-sm-6">
            <input
              type="radio"
              id="nmit_active_true"
              name="nmit_active"
              value={'true'}
              checked={nmit_editUser.nmit_active===true} // Kiểm tra nếu giá trị là "true"
              onChange={nmitHandleRadioChange} 
              /> <label htmlFor="nmit_active_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              id="nmit_active_false"
              name="nmit_active"
              value={'false'}
              checked={nmit_editUser.nmit_active===false} // Kiểm tra nếu giá trị là "false"
              onChange={nmitHandleRadioChange} 
              /> <label htmlFor="nmit_active_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={nmitHandleSubmit}>Update</button>
            <button className="px-3" onClick={nmitHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  )
}
