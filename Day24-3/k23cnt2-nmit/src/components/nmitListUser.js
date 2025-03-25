import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NmitListUser() {
    //state
    const [nmitListUser, setNmitListUser] = useState([])
    const nmitAPI = 'https://67e0d1e758cc6bf7852304f3.mockapi.io/nmit/nmit_users'

    useEffect(()=>{
        axios.get(nmitAPI)
        .then(nmitresponse => {
        //xu li du lieu tu api
        console.log(nmitresponse.data);// tra lai du lieu tu api
        setNmitListUser(nmitresponse.data)
        })
        .catch(error => {
            // xu li loi
            console.error("Error Detected", error)
        });
    },[])
    const nmitHandleDelete = async (nmitId)=>{
        if(window.confirm('Bạn có chắc chắn xoá không ?')){
            await axios.delete( nmitAPI+"/"+nmitId);
            let nmitListUserDelete = nmitListUser.filter(x=>x.id !==nmitId);
            setNmitListUser(nmitListUserDelete)
        }
    }
    const navigate = useNavigate();
    const nmitHandleUpdate = (nmitId) =>{
        navigate(`/nmit-edit-user/${nmitId}`)
    }
  return (
    <div>
        <center>
        <h2>Danh Sách User</h2>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    nmitListUser.map((nmitItem,index)=>{
                        return (
                            <tr>
                                <td>{nmitItem.id}</td>
                                <td>{nmitItem.nmit_name}</td>
                                <td>{nmitItem.nmit_email}</td>
                                <td>{nmitItem.nmit_phone}</td>
                                <td>
                                    {nmitItem.nmit_active?"Hoạt động":"Đang khoá"}
                                </td>
                                <td>
                                    <button onClick={(ev)=>nmitHandleUpdate(nmitItem.id)}>Edit</button>
                                    <button onClick={(ev)=>nmitHandleDelete(nmitItem.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </center>
    </div>
  )
}
