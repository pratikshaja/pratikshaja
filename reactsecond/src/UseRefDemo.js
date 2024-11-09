import React,{useRef} from "react";

function UseRefDemo(){
    let inputboxRef = useRef(null)
    function handleInput(){
        console.log("call the function");
        inputboxRef.current.style.color ="red"
        inputboxRef.current.focus();
    }
    return(
           <div>
            <h3>UseRef Hook</h3>
            <input type="text"  ref={inputboxRef}/>
            <button onClick={handleInput}>UseRef</button>
            <hr />
           </div>
    )
}
export default UseRefDemo;