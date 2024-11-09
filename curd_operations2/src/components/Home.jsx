import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Home() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/userinfo')
        .then(res=>setData(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = (id)=>{
        const confirm = window.confirm("Are sure to delete it ?");
        if(confirm){
            axios.delete('http://localhost:3000/userinfo/' + id)
        .then(res=>{
            location.reload()
        })
        .catch(err => console.log(err));
        }
    }
  return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center  vh-100'>
            <h1 className='mb-4'>List Of Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Add</Link>
                     </div>
                <Table>
                    <thead className='text-start'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => {
                                return(
                                    <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                    <Link to={`/read/${d.id}`} className='btn btn-primary me-2'>Read</Link>

                                        <Link to={`/update/${d.id}`} className='btn btn-info text-white me-2'>Edit</Link>
                                        <button onClick={e=>handleDelete(d.id)} className='btn btn-danger me-2'>Delete</button>

                                    </td>


                                </tr>
                                )
                                
                            }

                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
  )
}

export default Home