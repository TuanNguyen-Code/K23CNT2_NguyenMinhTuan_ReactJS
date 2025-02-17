import React from "react";

export default function nmitJsxExpression() {
    const name="Nguyễn Minh Tuấn";//biến chung
    const user={//biến đối tượng
        firstname:"Tuấn",
        lastname:"Minh"
    }
    //hàm
    const fullname=(user)=>{
        return user.lastname + " " + user.firstname;
    }
    //element
    const element =(
        <div>
            {/*biểu thức jsx*/}
            <h2>{fullname(user)}</h2>
            <hr/>
            <h3>Welcome To {name}</h3>
        </div>
    );
    //hàm
    const sayhi=(name)=>{
        if(name){
            return <h3> Welcome To {name}</h3>
        }else{
            return <h3> Welcome To K23CNT2</h3>
        }
    }
    return(
        <div>
            <h1>NMIT - JsxExpression</h1>
            {/* sử dụng biến element */}
            {element}
            <hr/>
            {sayhi()}
            <hr/>
            {sayhi("HoLa:))))")}
        </div>
    )
}