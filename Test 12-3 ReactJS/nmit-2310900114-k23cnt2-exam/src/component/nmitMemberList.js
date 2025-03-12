import React, {Component} from "react";
import NmitMember from "./nmitMember";

class NmitMemberList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // lấy dữ liệu trong props từ nmitApp chuyển xuống
        let {rendernmitMembers, onnmitHandleDelete} = this.props;
        console.log("List:",rendernmitMembers);
        
        // chuyển dữ liệu vào nmitStudent để hiển thị
        let nmitElementmember = (rendernmitMembers || []).map((nmitItem, index)=>{
            return <NmitMember
            key={index}
            index={index}
            rendernmitmember={nmitItem}
            onnmitHandleDelete={onnmitHandleDelete} 
            />
        })
        return (
          <div className="card-body">
            <h3 className="card-title">Danh sách Tài Khoản</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Tuỳ Chọn</th>
                  </tr>
                </thead>
                <tbody>
                 {nmitElementmember}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
    }
    
    export default NmitMemberList;