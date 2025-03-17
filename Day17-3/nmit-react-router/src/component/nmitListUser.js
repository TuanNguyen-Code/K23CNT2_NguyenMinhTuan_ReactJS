import React from 'react'

export default function nmitListUser({rendernmitUsers}) {
    const nmitElements = rendernmitUsers.map((nmitItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{nmitItem.id}</td>
                    <td>{nmitItem.nmitFullName}</td>
                    <td>{nmitItem.nmitUserName}</td>
                    <td>{nmitItem.nmitPass}</td>
                </tr>
            </>)
    })
    return (
    <div>
        <h2>Account List</h2>
        <table className='table table-borderd grid text-center'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Fullname</th>
                    <th>Username</th>
                    <th>Pasword</th>
                </tr>
            </thead>
            <tbody>
                {nmitElements}
            </tbody>
        </table>
    </div>
  )
}
