import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NmitCreateUser() {
  
  let nmituser = {
    id:'',
    nmit_name:"",
    nmit_email:"",
    nmit_phone:"",
    nmit_active:false
  }

  const [nmit_user, setNmitUser] = useState(nmituser)
  const nmitApiUrl = "https://67e0d1e758cc6bf7852304f3.mockapi.io/nmit/nmit_users"
  
  const navigate = useNavigate();

  const nmitHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(nmit_user);
    axios
      .post(nmitApiUrl, nmit_user)
      .then((response) => {
        navigate('/list-user')
      })
      .catch((error) => console.log('Lỗi khi thêm user.'));

  }

  const nmitHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Thêm mới thông tin User</h2>
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
              value={nmit_user.nmit_name}
              onChange={(ev)=>setNmitUser({...nmit_user,nmit_name:ev.target.value})} 
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
              value={nmit_user.nmit_email}
              onChange={(ev)=>setNmitUser({...nmit_user,nmit_email:ev.target.value})} 
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
              value={nmit_user.nmit_phone}
              onChange={(ev)=>setNmitUser({...nmit_user,nmit_phone:ev.target.value})} 
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
              onChange={(ev)=>setNmitUser({...nmit_user,nmit_active:ev.target.value})} 
            /> <label htmlFor="nmit_active_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              id="nmit_active_false"
              name="nmit_active"
              value={'false'}
              onChange={(ev)=>setNmitUser({...nmit_user,nmit_active:ev.target.value})} 
            /> <label htmlFor="nmit_active_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={nmitHandleSubmit}>Create</button>
            <button className="px-3" onClick={nmitHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  );
}
