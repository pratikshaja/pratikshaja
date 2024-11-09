
import React,{createRef} from "react"
export default class RefDemo extends React.Component {
    constructor(){
        super();
        this.inputRef =createRef();

    }
    componentDidMount(){
       // console.log( this.inputRef.current.value = "24")
    }
    getVal(){
       // console.log( this.inputRef.current.value)

    }
    render(){
        return(
            <div>
                <h4>REF in React</h4>
                <input type="text"  ref={this.getVal()}/>
                <button onClick={()=>this.getVal()}>Click</button>
            </div>
        )
    }
}