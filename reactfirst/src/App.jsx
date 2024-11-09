import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Userclass from './Userclass'
import Student  from './Student'
import Studentclass from './Studentclass'
import Demo from './demo'
import Toggle from './Toggle'
import Form from './Form'
import Profile from './Profile'
import Login from './Login'
import Functionprops from './Functionprops'
import Apptest from './Apptest'
import ExHook from './ExHook'
import ExHookeffct from './ExHookeffct'





function App() {
  //useEffect hook 
  let [data, setData] = useState(0);
  let[count, setCount] = useState(24)
  

  const [name, setName] = useState("Pradnya")

  // pass function with props
  function getdata(){
    alert("Hello from function")

  }

  

  return (
    <>
     
      <h1>Vite + React</h1>
      <User/>
      <Userclass/>
      {/* props in functional component */}

      <Student name={name} email ="pratiksha@gmail.com"></Student>

      {/* props state update in functional component */}

      <button onClick={() => {setName("Jadhav")}}>props state update</button>

      {/* props in class component */}

      <Studentclass name="Pratiksha" email="pratiksha@gmai.com"/>
      {/* get value from input box */}
      <Demo/>
      {/* toggle button */}
      <Toggle/>
      {/* form submission */}
      <Form/>
      <Profile/>
      <Login/>
      {/* pass function with props */}
      <Functionprops data={getdata}/>

      {/* life cycle of method */}
      <Apptest/>
      {/* useState hook */}
      <ExHook/>
      {/* useEffect hook */}
      <ExHookeffct count ={count} data={data}/>
      <button onClick={()=>setData(data + 1 )}>Update data</button>
      <button onClick={()=>setCount(count + 2)}>update Count</button>
    </>
  )
}

export default App
