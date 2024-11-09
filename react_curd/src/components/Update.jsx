import React, { useState,useEffect } from "react";
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

function Update() {

  
 // const [data, setData] = useState([]);
  const{id} = useParams();
  const [value, setValue]=useState({
    name :'',
    email:'',
    phone:''
});
  const navigate =useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:3000/userinfo/${id}`)
    .then(res => setValue(res.data))
    .catch(err => console.log(err));
},[]);
 

const handleUpdate = (event)=>{
  event.preventDefault();
  axios.put(`http://localhost:3000/userinfo/`+ id,value)
  .then(res=>{
      console.log(res);
      navigate('/')
  })
  .catch(err => console.log(err));

}
    

  return (
    <div className="d-flex w-100  justify-content-center align-item-center ">
        <div className="w-50 border bg-white shadow  px-5 pt-3 pb-5 rounded">
          <h1>Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name "
                value={value.name}
                onChange={e=> setValue({...value, name:e.target.value})}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email "
                value={value.email}
                onChange={e=> setValue({...value, email:e.target.value})}


              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone "
                value={value.phone}
                onChange={e=> setValue({...value, phone:e.target.value})}


              />
            </div>
            <button className="btn btn-success me-2">Update</button>
            <Link to="/" className="btn btn-primary">Back</Link>
          </form>
        </div>
      </div>
  )
}

export default Update