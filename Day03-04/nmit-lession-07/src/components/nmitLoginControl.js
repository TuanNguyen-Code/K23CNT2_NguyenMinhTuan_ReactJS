import React,{Component} from "react";
import NmitLoginComp from "./nmitLoginComp";
import NmitLogoutComp from "./nmitLogoutComp";

class nmitLoginControl extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
        }
    }
    //hàm xử lí sự kiện login
    nmitHandelLogin=(event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render(){
        let {isLoggedIn}=this.state
        let nmitComp=isLoggedIn?<NmitLoginComp/>:<NmitLogoutComp/>
        return(
            <div>
                {nmitComp}
                {
                    isLoggedIn?
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button>
                        :<button onClick={this.nmitHandelLogin}>Login</button>
                }
            </div>
        )
    }
}
export default nmitLoginControl;