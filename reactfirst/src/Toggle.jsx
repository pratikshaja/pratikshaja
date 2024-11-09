import React from "react";

 function Toggle(){
    let [status, setStatus] = React.useState(true)
    return(
        <div className="App">
            <h2 className="heading">Hide and show button</h2>

            {
                status ?
                <h3>Hello User !!</h3> : null

            }
            {/* <button onClick={()=> setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button> */}
            <button onClick={()=>setStatus(!status)}>Toggle Btn</button> 
            <hr />  
        </div>
    )
}
export default Toggle;