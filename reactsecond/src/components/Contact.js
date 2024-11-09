import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Contact() {
  return (
    <div><h1>Contact page</h1>
   <Link to="company">company</Link>
   <Link to="other">other</Link>
   <Link to="address">address</Link>
   <Outlet/>

    </div>
  )
}

export default Contact