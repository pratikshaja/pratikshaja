import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import User from './components/User'
import Home from './components/Home'
import HomeContainer from './containers/HomeContainer'


function App() {
  // const [name, setName] = useState("");
  // const [email,setEmail] = useState("");
  // const[mobile,setMobile] = useState("");


  return (
    <>
    {/* <User data={{name : "pratiksha" , age: 24}}/> */}

     {/* <h2>post method</h2>
     <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
     <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
     <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> */}

{/* <button onClick={saveUser}>Submit</button> */}
<HomeContainer/>

    </>
  )
}

export default App
