import React,{useEffect,useState} from "react";

function ExHook(){
    const [namedata, setNameData] = useState("Pratiksha")
     useEffect(()=>{
        console.log("Hello from useEffect")
     })
    
    return(
        <div>
            <h4>Hook in react</h4>
            <h5>{namedata}</h5>
            <button onClick={()=>setNameData("Jadhav")}>Update</button>
            <hr />
            
        </div>
    );
}
export default ExHook;