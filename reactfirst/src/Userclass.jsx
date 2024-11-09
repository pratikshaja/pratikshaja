

import React,{ Component } from "react"
export default class User extends Component{
    constructor(){
        super();
        this.state={
            data : 1
        }
    }
    updatedata(){
        this.setState({data:this.state.data + 1})
    }
    render (){
        return(
            <div>
               <h1>{this.state.data } </h1>
               <h3>This is class component</h3>
               <button onClick={() => this.updatedata()}>update now</button>
            </div>
            
        )
    }
}