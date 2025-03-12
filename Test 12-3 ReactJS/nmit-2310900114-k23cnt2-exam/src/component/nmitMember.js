import React, { Component } from "react";

class NmitMember extends Component {
  constructor(props) {
    super(props);
  }
  // Hàm xử lý chức năng xóa Member
  nmitHandleDelete = (nmitId) => {
    // Chuyển lên nmitMemberList
    this.props.onnmitHandleDelete(nmitId);
}
  render() {
    // lấy đối tượng dữ liệu chuyển từ MemberList
    const { rendernmitmember, onnmitHandleDelete} = this.props;
    console.log("Student:", rendernmitmember);

    // Kiểm tra nếu rendernmitMember không tồn tại
    if (!rendernmitmember) {
      return <tr><td colSpan="4">Dữ liệu không có</td></tr>;
    }

    return (
      <>
      <tr>
        <td>{rendernmitmember.nmitId || "N/A"}</td>
        <td>{rendernmitmember.nmitFullName || "N/A"}</td>
        <td>{rendernmitmember.nmitUserName || "N/A"}</td>
        <td>{rendernmitmember.nmitPassword || "N/A"}</td>
        <td>
            <center>
          <div className="template-demo">
            <button type="button" className="btn btn-success btn-icon-text"
              onClick={() => onnmitHandleDelete(rendernmitmember.nmitId)}>
              Xóa
            </button>
          </div>
          </center>
        </td>
      </tr>
      </>
    );
  }
}

export default NmitMember;