import React from "react";

export default function NmitFuncComp(props){
    return(
        <div>
            <h2>Demo: Function Component Props</h2>
            <p>take data form props to view</p>
            <p>Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>Company: {props.company}</p>
            <p>Note: {props.note}</p>
        </div>
    )
}