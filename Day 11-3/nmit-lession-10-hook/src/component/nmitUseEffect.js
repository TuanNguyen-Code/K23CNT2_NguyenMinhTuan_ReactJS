import React, { useState, useEffect } from 'react'

export default function NvkUseEffect() {
    // State 
    const [nvkCount, setNvkCount] = useState(0);

    // useEffect sử dụng 1 tham số: Được thực hiện mối khi Render / Re-Render 
    useEffect(() =>{
        console.log("Đây là useEffect 1 tham số");
    });

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng => Được gọi duy nhất một lần khi Render 
    useEffect(() =>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []");
    }, []);

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối số phụ thuộc  //
    // => Được gọi mỗi khi đối số thay đổi 
    // Khởi tạo state là một mảng  
        const nvkArr = [10, 12, 20, 22];
        const [nvkArray, setNvkArray] = useState(nvkArr);
    useEffect(() =>{
            console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng các đối số phụ thuộc [nvkArray]");
        }, [nvkArray]);

    useEffect(() =>{
            console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng [nvkCount]");
        }, [nvkCount]);
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng 
    const nvkHandleAddList = () => {
        setNvkArray([
            ...nvkArray,
            parseInt(Math.random() * 100),
        ])
    };

  return (
    <div className='alert alert-info'>
      <h2>Demo useEffect </h2>
      <h3>Count : {nvkCount}</h3>
      <button onClick={() => setNvkCount(nvkCount + 1)}>Click Here ! </button>

      <div>
        <h3>Array: {nvkArray.toString()}</h3>
        <button onClick={nvkHandleAddList}>Thêm </button>
      </div>
    </div>
  )
}