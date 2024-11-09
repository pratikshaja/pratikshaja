import React, { useContext, useState } from 'react'
import UserContext from '../context/Usercontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl } from 'react-bootstrap';
function Login() {

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const{setUser}= useContext(UserContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username, password})
  }
  return (
    <div>
      <h2 className='text-dark mb-3 text-center'>Login</h2>
      <div className='mb-3'>
      <FormControl type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/>

      </div >
      <div className='mb-3'>
      <FormControl type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>

      </div>
      <div className='mb-3'>
      <button type='submit' className='btn btn-success' onClick={handleSubmit}>Submit</button>

      </div>
    </div>
  )
}

export default Login