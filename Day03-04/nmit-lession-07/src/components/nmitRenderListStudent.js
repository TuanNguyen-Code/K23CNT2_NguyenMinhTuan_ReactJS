import React,{Component} from "react";

class nmitRenderListStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            nmitStudent:[
                {nmitID:"NTU01",nmitName:"Nguyễn Minh Tuấn",nmitAge:"20",nmitClass:"K23CNT2"},
                {nmitID:"NTU02",nmitName:"Nguyễn Văn Khải",nmitAge:"20",nmitClass:"K23CNT2"},
                {nmitID:"NTU03",nmitName:"Kim Ngọc Tâm",nmitAge:"20",nmitClass:"K23CNT2"},
                {nmitID:"NTU04",nmitName:"Nguyễn Hương Trà",nmitAge:"20",nmitClass:"K23CNT2"},
                {nmitID:"NTU05",nmitName:"Nguyễn Linh Chi",nmitAge:"20",nmitClass:"K23CNT2"},
            ],
        }
    }
    render(){
        let nmitElement=this.state.nmitStudent.map((nmitItem,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{nmitItem.nmitID}</td>
                    <td>{nmitItem.nmitName}</td>
                    <td>{nmitItem.nmitAge}</td>
                    <td>{nmitItem.nmitClass}</td>
                    <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                    </td>
                </tr>
            )    
        })
        return(
            <div className="alert alert-info">
                <h2>Student List</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>nmitID</th>
                            <th>nmitName</th>
                            <th>nmitAge</th>
                            <th>nmitClass</th>
                            <th>nmitAction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nmitElement}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default nmitRenderListStudent;