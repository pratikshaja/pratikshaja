import {useState} from 'react'

function User(){
    let [name,setdata ]= useState("React");
    function updatedata(){
        setdata("ReactJs")
    }
    function click(){
        alert("Hello User !!")
    }
    return(
        <div>
        <h1>Hello User Component</h1>
        <h2>User component from the main file</h2>
        <h2>{name}</h2>
        <button onClick={click}>Click Me</button>
        <button onClick={updatedata}>Update</button>
     <hr />
        </div>
    )
}

export default User;