import './App.css';
import './style.css'
import style from './custom.module.css'
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import Array from './Array';
import User from './User'
import HookEx from './HookEX';
import RefDemo from './RefDemo';
import UseRefDemo from './UseRefDemo';
import ForwardRefDemo from './ForwardRefDemo';
import ControllerDemo from './ControllerDemo';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home  from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import Filter from './components/Filter'
import Company from './components/Company';
import Other from './components/Other';
import Login from './components/Login'
import Address from './components/Address';
import Country from './components/Country'





function App() {
  let studentnm=[
    {name:'pratiksha', address:'Sangli' , contact:7899866},
    {name:'Pradnya', address:'Sangli' , contact:67899765},
    {name:'prajkta', address:'Sangli' , contact:367890098},
    {name:'Vaishnav', address:'Sangli' , contact:5678997}

  ];

  //map looping
  studentnm.map((item)=>
    console.log("My name is " ,item)
  );

  for(let i=0; i< studentnm.length; i++){
   console.log(" In for loop My name is " , studentnm[i])

  }
  // lifting state up
  //let name="Pratiksha Jadhav";

  function parentAlert(name){
    alert("hello" +  name);
  }
  //forwardref
  let inputRef = useRef(null)
  function updateInput(){
    console.log("hello")
    //inputRef.current.value ="1000"
  }


  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>

       <Routes>
       <Route path="/home" element= {<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/about" element= {<About/>}/>
       <Route path="/country/:name" element={<Country/>}/>
       <Route path="/filter" element={<Filter/>}/>
       {/* <Route path="/*" element={<Navigate to="/home"/>}/> */}
       <Route path="/contact/" element= {<Contact/>}>
       <Route path="company" element={<Company/>}/>
       <Route path="other" element={<Other/>}/>
       <Route path="address" element={<Address/>}/>

       </Route>

       <Route path="/*" element={<Page404/>}/>

       </Routes>

       </BrowserRouter>
      <h3 className='heading'>style type 1 external css in reactjs 1</h3>
      <h3 style={{color:'green', background:"pink"}}>style type 2 inline css in reactjs 1</h3>
      <h1 className={style.pageheading}>style type 3 modular css in reactjs 1</h1>
      <Button>click</Button>
      <h3>List With Bootstrap table</h3>

      <h3>Array listing with map function</h3>
    
        <Table >
          <tbody>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Contact</td>

            </tr>
          {
          studentnm.map((studnm)=>
            <tr>
              <td>{studnm.name}</td>
              <td>{studnm.address}</td>
              <td>{studnm.contact}</td>
            </tr>
         )   
      }
       </tbody>
       </Table>
       <User alert={parentAlert}/>
       <HookEx/>
       <RefDemo/>
       <UseRefDemo/>
       {/* Forward ref */}
       <ForwardRefDemo/><br></br>
       <button onClick={updateInput()}>Update Inputbox</button>
       <ControllerDemo/>

      
    </div>
  );
}


export default App;
