import React, {Component} from "react";

class nmitClassComp extends Component{
    constructor(props){
        super(props)
        //khoi tao state
        this.state={
            fullname:"minh tuan",
            age: 20,
            phone: "0526924062"
        }
    }
    //process event function
    changeInfo=(ev)=>{
        //update state
        this.setState({
            fullname:"Nguyen Minh Tuan"
        });
    }
    render(){
        let user = this.props.renderUsers;
        console.log('===================');
        console.log(user)
        console.log('===================');
        return(
            <div className="alert alert-success">
                <h2>Show data from state</h2>
                <p>info state (fullname): {this.state.fullname}</p>
                <p>info state (age): {this.state.age}</p>
                <p>info state (phone): {this.state.phone}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.changeInfo}>Change Info</button>
                <h3>Take data from props</h3>
                <p>Name: {this.props.renderName}</p>
                <p>Fullname:{this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
                <p>Age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>Phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
            </div>
        )
    }
}

export default nmitClassComp;