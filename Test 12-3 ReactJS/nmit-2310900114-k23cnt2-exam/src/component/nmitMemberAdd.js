import React, { Component } from "react";

class NmitMemberAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nmitId: "",
      nmitFullName: "",
      nmitUserName: "",
      nmitPassword: ""
    };
  }

  // Cập nhật state khi nhập dữ liệu vào form
  nmitHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Xử lý khi bấm nút Thêm mới
  nmitHandleSubmit = (event) => {
    event.preventDefault();
    const { nmitId, nmitFullName, nmitUserName, nmitPassword } = this.state;

    if (!nmitId || !nmitFullName || !nmitUserName || !nmitPassword) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Gửi dữ liệu lên `nmitApp.js`
    this.props.onnmitHandleAdd({
      nmitId,
      nmitFullName,
      nmitUserName,
      nmitPassword
    });

    // Reset form sau khi thêm
    this.setState({
      nmitId: "",
      nmitFullName: "",
      nmitUserName: "",
      nmitPassword: ""
    });
  };

  render() {
    return (
      <div className="card p-3">
        <h3 className="text-center">Thêm Tài Khoản Mới</h3>
        <form onSubmit={this.nmitHandleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              className="form-control"
              name="nmitId"
              value={this.state.nmitId}
              onChange={this.nmitHandleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Họ và Tên:</label>
            <input
              type="text"
              className="form-control"
              name="nmitFullName"
              value={this.state.nmitFullName}
              onChange={this.nmitHandleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Tên đăng nhập:</label>
            <input
              type="text"
              className="form-control"
              name="nmitUserName"
              value={this.state.nmitUserName}
              onChange={this.nmitHandleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              name="nmitPassword"
              value={this.state.nmitPassword}
              onChange={this.nmitHandleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Thêm Mới
          </button>
        </form>
      </div>
    );
  }
}

export default NmitMemberAdd;
