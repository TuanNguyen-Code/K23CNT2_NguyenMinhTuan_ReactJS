import React, { Component } from "react";
import NmitStudent from "./nmitStudent";

class nmitStudentList extends Component {
    constructor(props){
        super(props);
    }
        // Hàm xử lý sự kiện xem
    nmitHandleView = (nmitStudent)=>{
        // Chuyển dữ liệu lên nmitApp
        this.props.onnmitHandleView(nmitStudent);
    }
      // Hàm xử lý chức năng xóa sinh viên
    nmitHandleDelete = (nmitId) => {
      // Chuyển dữ liệu lên nmitApp
      this.props.onnmitHandleDelete(nmitId);
  };

  // Hàm xử lý chuyển sang chế độ sửa
  nmitHandleEditMode = (nmitStudent) => {
      // Chuyển dữ liệu lên nmitApp
      this.props.onnmitHandleEditMode(nmitStudent);
  };
  render() {
    // lấy dữ liệu trong props từ nmitApp chuyển xuống
    let {rendernmitStudents} = this.props;
    console.log("List:",rendernmitStudents);
    
    // chuyển dữ liệu vào nmitStudent để hiển thị
    let nmitElementStudent = rendernmitStudents.map((nmitItem,index)=>{
        return <NmitStudent
          key={index}
          index={index}
          rendernmitStudent={nmitItem}
          onnmitHandleView={this.nmitHandleView}
          onnmitHandleDelete={this.nmitHandleDelete} 
          onnmitHandleEditMode={this.nmitHandleEditMode}
        />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
             {nmitElementStudent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default nmitStudentList;