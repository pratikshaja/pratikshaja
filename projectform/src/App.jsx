import { useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Transaction from './Transaction';
import Transactiondetails from './Transactiondetails';
import Inputbox from './components/Inputbox'
import form from './form.json'; 
import Userinfo from './Userinfo.json'
import DynamicForm from './components/DynamicForm';
import TabButton from'./components/TabButton'


function App() {
  
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
};

function handleSelect(){
  console.log("button changed")
}
  

  return (
    <>

    <div className="container mt-5">
            <Inputbox schema={form} onSubmit={handleFormSubmit}  />
        </div>

        <div className="container mt-5">
            <DynamicForm schema={Userinfo} onSubmit={handleFormSubmit} />
        </div>
        <TabButton onSelect={handleSelect}/>
      
    </>
  )
}

export default App;
