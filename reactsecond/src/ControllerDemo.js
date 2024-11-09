import React,{useState} from 'react';
function ControllerDemo(){
    let [val, setVal]=useState("");
    let [item, setItem]=useState("");

    return(
        <div>
            <hr />
            <h3>Controller in React</h3>
            <input type="text"  value={val} onChange={(e)=>setVal(e.target.value)}/>
            <input type="text"  value={item} onChange={(e)=>setItem(e.target.value)}/>
            <h3>value:{val}</h3>
            <h3>value:{item}</h3>


        </div>
    )
}
export default ControllerDemo;