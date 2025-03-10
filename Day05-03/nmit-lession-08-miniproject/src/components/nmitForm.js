import React, { Component } from "react";

class nmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nmitStudent: this.props.rendernmitStudent || {
            nmitId: '',
            nmitName: '',
            nmitAge: '',
            nmitGender: '',
            nmitBirthday: '',
            nmitBirthPlace: '',
            nmitAddress: ''
        }
    };
}

componentDidUpdate(prevProps) {
    if (prevProps.rendernmitStudent !== this.props.rendernmitStudent) {
        this.setState({ nmitStudent: this.props.rendernmitStudent });
    }
}

handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        nmitStudent: {
            ...this.state.nmitStudent,
            [name]: value
        }
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.isEdit) {
        this.props.onnmitHandleEdit(this.state.nmitStudent);
    } else {
        this.props.onnmitHandleAdd(this.state.nmitStudent);
    }
    this.setState({
        nmitStudent: {
            nmitId: '',
            nmitName: '',
            nmitAge: '',
            nmitGender: '',
            nmitBirthday: '',
            nmitBirthPlace: '',
            nmitAddress: ''
        }
    });
  }
  render() {
    let {rendernmitStudent} = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control"  value={rendernmitStudent.nmitId} readOnly/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={rendernmitStudent.nmitStudentName}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={rendernmitStudent.nmitAge}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" value={rendernmitStudent.nmitGender}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy"  value={rendernmitStudent.nmitBirthday}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control"  value={rendernmitStudent.nmitBirthPlace}>
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"TpHCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                  <option value={"HP"}>Hải Phòng</option>
                  <option value={"HD"}>Hải Dương</option>
                  <option value={"QB"}>Quảng Bình</option>
                  <option value={"ĐB"}>Điện Biên</option>
                  <option value={"CM"}>Cà Mau</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={rendernmitStudent.nmitAddress} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              {this.props.isEdit ? 'Sửa' : 'Thêm mới'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default nmitForm;