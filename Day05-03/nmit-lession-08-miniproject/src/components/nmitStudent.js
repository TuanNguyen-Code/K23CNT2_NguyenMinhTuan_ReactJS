import React, { Component } from "react";

class NmitStudent extends Component {
  constructor(props) {
    super(props);
  }

  // Hàm xử lý chức năng xem
  nmitHandleView = (nmitStudent) => {
    // Chuyển lên nmitStudentList
      this.props.onnmitHandleView(nmitStudent);
  };
  // Hàm xử lý chức năng xóa sinh viên
  nmitHandleDelete = (nmitId) => {
    // Chuyển lên nmitStudentList
    this.props.onnmitHandleDelete(nmitId);
}

// Hàm xử lý chuyển sang chế độ sửa
nmitHandleEdit = (nmitStudent) => {
    // Chuyển lên nmitStudentList
    this.props.onnmitHandleEditMode(nmitStudent);
}

  render() {
    // lấy đối tượng dữ liệu chuyển từ StudentList
    const { rendernmitStudent, studentKey } = this.props;
    console.log("Student:", rendernmitStudent);

    // Kiểm tra nếu rendernmitStudent không tồn tại
    if (!rendernmitStudent) {
      return <tr><td colSpan="6">Dữ liệu không có</td></tr>;
    }

    return (
      <>
      <tr>
        <td>{studentKey}</td>
        <td>{rendernmitStudent.nmitId || "N/A"}</td>
        <td>{rendernmitStudent.nmitStudentName || "N/A"}</td>
        <td>{rendernmitStudent.nmitAge || "N/A"}</td>
        <td>{rendernmitStudent.nmitGender || "N/A"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => this.nmitHandleView(rendernmitStudent)}
            >
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text"
              onClick={() => this.nmitHandleEdit(rendernmitStudent)}>
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text"
              onClick={() => this.nmitHandleDelete(rendernmitStudent.nmitId)}>
              Xóa
            </button>
          </div>
        </td>
      </tr>
      </>
    );
  }
}

export default NmitStudent;
