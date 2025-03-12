import React, { useState } from 'react';

export default function NvkUseState() {
    // Khởi tạo State 
    const [nvkCount, setNvkCount] = useState(0);

    // Khởi tạo state là một mảng  
    const nvkArr = [10, 12, 20, 22];
    const [nvkArray, setNvkArray] = useState(nvkArr);

    // Khởi tạo State với mảng Object 
    const nvkStudents = [
        { nvkId: 1, nvkName: 'Nguyen Van A', nvkAge: 20 },
        { nvkId: 2, nvkName: 'Nguyen Van B', nvkAge: 22 },
    ];
    const [nvkStudentList, setNvkStudentList] = useState(nvkStudents);
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng 
        const nvkHandleAddList = () => {
            setNvkArray([
                ...nvkArray,
                parseInt(Math.random() * 100),
            ])
        };

    // Hàm xử lý sự kiện khi thêm mới sinh viên vào danh sách
    const nvkHandleAddNewStudent = () => {
        let nvkStudent = {
            nvkId: "SV003",
            nvkName: "Nguyen Van C",
            nvkAge: 24
        }
        // Thêm vào state nvkStudentList
        setNvkStudentList(
            [
                ...nvkStudentList,
                nvkStudent
            ]);

        console.log("List : ", nvkStudentList);

    }
    return (
        <div className='alert alert-danger'>
            <h2>Use State Demo</h2>
            <div>
                <h3>Count: {nvkCount}</h3>
                <button onClick={() => setNvkCount(nvkCount + 1)}>Tăng</button>
                <button onClick={() => setNvkCount(nvkCount - 1)}>Giảm</button>
            </div>
            <div>
                <h3>Array: {nvkArray.toString()}</h3>
                <button onClick={nvkHandleAddList}>Thêm phần tử</button>
            </div>
            <div>
                <h3>Danh sách sinh viên</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            nvkStudentList.map((nvkStudent) => {
                                return (
                                    <tr key={nvkStudent.nvkId}>
                                        <td>{nvkStudent.nvkId}</td>
                                        <td>{nvkStudent.nvkName}</td>
                                        <td>{nvkStudent.nvkAge}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                    <tfoot>
                        <button onClick={nvkHandleAddNewStudent}>Thêm mới SV </button>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}