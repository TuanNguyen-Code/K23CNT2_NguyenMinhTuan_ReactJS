import React,{Component} from "react";

class nmitAppleComp extends Component{
    constructor(props){
        super(props);
        this.state={
            nmitPhone:[
                {
                    nmitID:"P001"
                    ,nmitName:"IPhone11"
                    ,nmitQuantity:15
                    ,nmitPrice:1000
                },
                {
                    nmitID:"P002"
                    ,nmitName:"IPhone12"
                    ,nmitQuantity:20
                    ,nmitPrice:1250
                },
                {
                    nmitID:"P003"
                    ,nmitName:"IPhone13"
                    ,nmitQuantity:10
                    ,nmitPrice:1500
                },
                {
                    nmitID:"P004"
                    ,nmitName:"IPhone14"
                    ,nmitQuantity:15
                    ,nmitPrice:2000
              },
            ]
        }
    }
    render(){
        let nmitElement=this.state.nmitPhone.map((nmitItem,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{nmitItem.nmitID}</td>
                    <td>{nmitItem.nmitName}</td>
                    <td>{nmitItem.nmitQuantity}</td>
                    <td>{nmitItem.nmitPrice}</td>
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
                            <th>nmitQuantity</th>
                            <th>nmitPrice</th>
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
export default nmitAppleComp;