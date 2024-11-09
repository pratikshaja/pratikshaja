import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div><h1>Home page</h1>
    <p>This our Home page </p>
    <p>And We learn how to render !! </p>
    <Link to="/about">Go to About</Link>
    <br />
    <button onClick={()=>navigate('/about')}>Go to About </button>
    <br />
    <button onClick={()=>navigate('/filter')}>Go to Filter </button>


    </div>
  )
}

export default Home