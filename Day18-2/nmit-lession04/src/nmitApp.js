import NmitFuncComp from "./Components/nmitFuncComp";
import NmitFuncComp1 from "./Components/nmitFuncComp1";
import NmitClassComp from "./Components/nmitClassComp";

function nmitApp() {
  const user={
    fullname:"nguyen minh tuan",
    age: 20,
    phone: 12992502
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Component - Props - State</h1>
      <hr/>
      <div className="alert alert-danger">
        <NmitFuncComp name="Minh Tuan" address="28A" company="DevMaster"/>
      </div>
      <hr/>
      <div className="alert alert-info">
        <NmitFuncComp1 renderInfo={user}/>
      </div>
      <hr/>
      <div>
        <NmitClassComp />
      </div>
      <hr/>
      <div>
        {/*transfer date from nmitApp to nmitClassComp */}
        <NmitClassComp renderName="K23CNT2" renderUsers={user}/>
      </div>
    </div>
  );
}

export default nmitApp;
