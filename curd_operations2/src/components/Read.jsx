import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Read() {

  const [data, setData] = useState([]);
  const{id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/userinfo/${id}`)
        .then(res=>setData(res.data))
        .catch(err => console.log(err));
    },[]);
  return (
    <div className='d-flex w-100  justify-content-center align-item-center'>
      <div className='w-50 border bg-white shadow  px-5 pt-3 pb-5 rounded'>
        <h3 className='text-center'>User Details</h3>
        <div className='mb-2'><strong>Name: {data.name}</strong></div>
        <div className='mb-2'><strong>Email: {data.email}</strong></div>
        <div className='mb-4'><strong>Phone: {data.phone}</strong></div>
        <Link to={`/update/${id}`} className='btn btn-success me-3'>Edit</Link>
        <Link to='/' className='btn btn-primary'>Back</Link>


      </div>
    </div>
  )
}

export default Read