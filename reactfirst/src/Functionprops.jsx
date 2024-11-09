import React from "react";

function Functionprops(props){
    return(
        <div>
            <h3>Pass Function as Props</h3>
            <button onClick={props.data}>Call to function</button>
        </div>
    )
}
export default Functionprops;