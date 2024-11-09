

import React,{ Component } from "react"
export default class Apptest extends Component{
    constructor(){
        super();
        console.log("hello from constructor")

      
    }
    componentDidMount(){
        console.log("hello from componentdidmount")
    }
    render (){
        console.log("hello from  render method")
        return(
            <div>
               <h3>constructor call first</h3>
               <hr />
            </div>
            
            
        )
    }
}