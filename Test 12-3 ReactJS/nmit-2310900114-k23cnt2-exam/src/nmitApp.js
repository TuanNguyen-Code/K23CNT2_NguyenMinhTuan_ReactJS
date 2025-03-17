import React, { Component } from 'react'
import NmitMemberList from './component/nmitMemberList';
import NmitMemberAdd from './component/nmitMemberAdd'; 

export default class nmitApp extends Component {
  constructor(props){
    super(props);
    this.state={
      nmitMembers:[
        {nmitId:"2310900114", nmitFullName:"Nguyễn Minh Tuấn",nmitUserName:"nonsteam",nmitPassword:"12345678"},
        {nmitId:"2310900124", nmitFullName:"Kim Ngọc Tâm",nmitUserName:"steam",nmitPassword:"11111111"},
        {nmitId:"2310900112", nmitFullName:"Nguyễn Văn Khải",nmitUserName:"steam02",nmitPassword:"87654321"},
        {nmitId:"2310900152", nmitFullName:"Nguyễn Hương Trà",nmitUserName:"hate",nmitPassword:"22334455"},
        {nmitId:"2310900102", nmitFullName:"Nguyễn Linh Chi",nmitUserName:"peach",nmitPassword:"22222222"},
        ],
      nmitMember:"",
    }
  }
  //Hàm xử lí sự kiện hiển thị Member
  nmitHandleView=(nmitMember)=>{
    this.setState({
      nmitStudent:nmitMember,
    })
  }
  // Hàm xử lí sự kiện thêm Member
  nmitHandleAdd = (newMember) => {
    this.setState({
      nmitMembers: [...this.state.nmitMembers, newMember]
    });
  };
  // Hàm xử lí sự kiện xoá Member
  nmitHandleDelete = (nmitId) => {
    console.log("Xoá tài khoản với ID:", nmitId); // Debug
    this.setState({
      nmitMembers: this.state.nmitMembers.filter(member => member.nmitId !== nmitId)
    });
  };
  render() {
    //log
    console.log("View Member", this.state.nmitMember)
    return (
      <div>
      <h1 className="text-center">
      2310900114 - Nguyễn Minh Tuấn - K23CNT2 - EXAM
    </h1>
    <section className="container-fluid mt-3">
      <div className="row">

        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <NmitMemberList
            rendernmitMembers={this.state.nmitMembers}
            onnmitHandleDelete={this.nmitHandleDelete}
            />
            <div className="col-lg-5">
              {/* Form thêm mới tài khoản */}
              <NmitMemberAdd onnmitHandleAdd={this.nmitHandleAdd} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
  }
}
