import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>About Page</h1>
         <p>This our About page </p>
    <p>And We learn how to render !! </p>
    <Link to="/contact">Go to contact</Link>
    </div>
  )
}

export default About