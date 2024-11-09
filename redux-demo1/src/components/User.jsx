import React from "react";

const User=(props)=>{
    const {data}= props
  return(
    <div>
        <h3>react-redux   User Component</h3>
        <h4>{data.name}</h4>
        <h4>{data.age}</h4>

    </div>
  )
}
export default User;
