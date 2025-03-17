import React from 'react'

const nmitSanPhams = [
    { nmitid: 1, nmitname: "Laptop ASUS ROG", nmitprice: "$1500", nmitimage: "" },
    { nmitid: 2, nmitname: "Chuột Gaming Razer", nmitprice: "$80", nmitimage: "" },
    { nmitid: 3, nmitname: "Bàn phím cơ Keychron K8", nmitprice: "$120", nmitimage: "" },
    { nmitid: 4, nmitname: "Tai nghe HyperX Cloud II", nmitprice: "$99", nmitimage: "" },
  ];
export default function nmitSanPham() {
    return (
            <div className='container mx-auto p-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
                {nmitSanPhams.map((sanpham) =>(
                    <div key={sanpham.nmitid} className='border rounded-2xl p-4 shadow-md bg-white text-center'>
                        <img src={sanpham.nmitimage} alt={sanpham.nmitname} className='w-full h-32 object-cover rounded-xl mb-2'></img>
                        <h3 className='text-lg font-semibold'>{sanpham.nmitname}</h3>
                        <p className='text-lg font-semibold'>{sanpham.nmitprice}</p>
                    </div>
                ))}
                </div>
            </div>
        )
    }
