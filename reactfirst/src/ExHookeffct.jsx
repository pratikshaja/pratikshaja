import React,{useEffect, useState} from "react";
function ExHookeffct(props){
   useEffect(()=>{
    alert("count is " + props.count)
   }, [props.count])
   useEffect(()=>{
    alert("count is " + props.data)
   }, [props.data])
    return(
        <div>
            <h3>UseEffect Hook</h3>
            <h4>Data : {props.data}</h4>
            <h4>Count : {props.count}</h4>

            
        </div>
    )
}
export default ExHookeffct;