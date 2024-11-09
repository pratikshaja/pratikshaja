import React from 'react'
import Nav from 'react-bootstrap/Nav';


function Transaction() {
  return (
    <>
    <Nav variant="tabs" defaultActiveKey="/home" className='mt-5 main-tab'>
      <Nav.Item>
        <Nav.Link href="/home" className='text-dark'>Transaction Names</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-dark'>Account Type Names </Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}

export default Transaction;




