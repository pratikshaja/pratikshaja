import React from 'react'
export default class Purecomponent extends React.Component (){
    constructor(){
        super();
        this.state ={
            count : 1
        }
    }
    render(){
        return(
            <div>
                <h3>Pure Component in React</h3>
              {/* </div>  <button onClick={()=>this.setState(count:this.state.count+1)}>Update</button> */}
            </div>
        )
    }
}