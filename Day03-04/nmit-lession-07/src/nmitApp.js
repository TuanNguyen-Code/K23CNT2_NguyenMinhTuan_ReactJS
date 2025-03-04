import React,{Component} from "react";
import NmitLoginControl from "./components/nmitLoginControl";
import NmitRenderList from "./components/nmitRenderLest";
import NmitRenderListStudent from "./components/nmitRenderListStudent";
import NmitAppleComp from "./components/nmitAppleComp";

class nmitApps extends Component{
  render(){
    return(
      <div className="container border my-3">
        <h1 className="text-center"> Nguyễn Minh Tuấn - Render Condition, List key</h1>
        <hr/>
        <NmitLoginControl/>
        <hr/>
        <NmitRenderList/>
        <hr/>
        <NmitRenderListStudent/>
        <hr/>
        <NmitAppleComp/>
      </div>
    )
  }
}
export default nmitApps;