import NmitClassComponent from "./component/nmitClassComponent";
import NmitFuncComp from "./component/nmitFuncitonComponent"
import NmitJsx from "./component/nmitJsxExpression"
function nmitApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>Welcome To Nguyễn Minh Tuấn ReactJS</h1>
      {/* sử dụng component */}
      <NmitJsx/>
      {/* sử dụng hàm */}
      <NmitFuncComp/>
      {/* sử dụng class */}
      <NmitClassComponent></NmitClassComponent>
    </div>
  );
}

export default nmitApp;
