import React from 'react'

export default function nmitRenderList() {
    const nmitList=["Nguyễn Minh Tuấn","React JS"," NTU"];

    return (
    <div className='alert alert-success'>
        <h2>Danh Sách:</h2>
        <ul>
        {
            nmitList.map(item=>{
                return <li>{item}</li>
            })
        }
        </ul>
    </div>
  )
}
