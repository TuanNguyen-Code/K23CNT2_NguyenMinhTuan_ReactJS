import React from "react";

const thongtincanhan = ({ name, phone, id, lop, date }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Thông tin cá nhân</h2>
      <p><strong>Họ và Tên:</strong> {name}</p>
      <p><strong>Mã Sinh Viên:</strong> {id}</p>
      <p><strong>Ngày Sinh:</strong> {date}</p>
      <p><strong>Số Điện Thoại:</strong> {phone}</p>
      <p><strong>Tên Lớp:</strong> {lop}</p>
    </div>
  );
};

export default thongtincanhan;

