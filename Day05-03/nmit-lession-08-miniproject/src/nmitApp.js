import React, { Component } from 'react'
import NmitControl from "./components/nmitControl";
import NmitForm from './components/nmitForm';
import NmitStudentList from './components/nmitStudentList';

export default class nmitApp extends Component {
  constructor(props){
    super(props);
    this.state={
      nmitStudents:[
        {nmitId:"SV001", nmitStudentName:"Hehe",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
        {nmitId:"SV002", nmitStudentName:"Haha",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
        {nmitId:"SV003", nmitStudentName:"Hihi",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
        {nmitId:"SV004", nmitStudentName:"Hoho",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
        {nmitId:"SV005", nmitStudentName:"Hrhr",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
        {nmitId:"SV006", nmitStudentName:"Hbhb",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
        {nmitId:"SV007", nmitStudentName:"Hmhm",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
        {nmitId:"SV008", nmitStudentName:"Hnhn",nmitAge:"20",nmitGender:"Nam",nmitBirthday:"02/04/2005",nmitBirthPlace:"HN",nmitAddress:"28A Lê Trọng Tấn"},
      ],
      nmitStudent:"",
    }
  }
  //Hàm xử lí sự kiện hiển thị Student
  nmitHandleView=(nmitStudent)=>{
    this.setState({
      nmitStudent:nmitStudent,
    })
  }
    // Hàm xử lí sự kiện xóa sinh viên
  nmitHandleDelete = (nmitId) => {
    this.setState({
      nmitStudents: this.state.nmitStudents.filter(student => student.nmitId !== nmitId)
    })
  }

  // Hàm xử lí sự kiện thêm mới sinh viên
  nmitHandleAdd = (newStudent) => {
    this.setState({
      nmitStudents: [...this.state.nmitStudents, newStudent]
    })
  }

  // Hàm xử lí sự kiện sửa sinh viên
  nmitHandleEdit = (editedStudent) => {
    this.setState({
      nmitStudents: this.state.nmitStudents.map(student => student.nmitId === editedStudent.nmitId ? editedStudent : student),
      isEdit: false,
      nmitStudent: {},
    })
  }

  // Hàm xử lí chuyển sang chế độ sửa
  nmitHandleEditMode = (nmitStudent) => {
    this.setState({
      nmitStudent: nmitStudent,
      isEdit: true,
    })
  }
  render() {
    //log
    console.log("View Student", this.state.nmitStudent)
    return (
      <div>
      <h1 className="text-center">
      Nguyễn Minh Tuấn - K23CNT2 - Mini Project
    </h1>
    <section className="container-fluid mt-3">
      <div className="row">

        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">

            {/* header */}
            <NmitControl  onnmitHandleAdd={this.nmitHandleAdd}/>
            {/* danh sách sinh vien  */}
            <NmitStudentList
            rendernmitStudents={this.state.nmitStudents}
            onnmitHandleView={this.nmitHandleView} 
            onnmitHandleDelete={this.nmitHandleDelete} 
            onnmitHandleEditMode={this.nmitHandleEditMode}/>
          </div>
        </div>
        <div className="col-5 grid-margin">
          {/* form  */}
          <NmitForm
          rendernmitStudent = {this.state.nmitStudent}
          isEdit={this.state.isEdit} 
          onnmitHandleAdd={this.nmitHandleAdd} 
          onnmitHandleEdit={this.nmitHandleEdit}/>
        </div>
      </div>
    </section>
    </div>
    )
  }
}
