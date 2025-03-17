import React, { useState } from 'react'

export default function NmitFormUser({onnmitAddNew}) {

    const [id, setnmitId] = useState('')
    const [nmitFullName, setnmitFullName] = useState('')
    const [nmitUserName, setnmitUserName] = useState('')
    const [nmitPass, setnmitPass] = useState('')

   

    const nmitHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,nmitFullName,nmitUserName, nmitPass)
        onnmitAddNew({id,nmitFullName,nmitUserName, nmitPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setnmitId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='nmitFullName' value={nmitFullName} onChange={(ev)=>setnmitFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='nmitUserName' value={nmitUserName} onChange={(ev)=>setnmitUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='nmitPass' value={nmitPass} onChange={(ev)=>setnmitPass(ev.target.value)} /> </p>
            <p>
                <button name='nmitSave' onClick={nmitHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}