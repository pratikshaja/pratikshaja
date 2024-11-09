import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import purchase_book from '../containers/bookAction'

function BookContainer() {
  const numofbooks =  useSelector(state =>state.NumberofBooks)
  const dispatch = useDispatch ()
  return (
    <>
       <h3>Book container</h3>
       <h4>Number of Books - {numofbooks} </h4>
       <button onClick={()=>dispatch(purchase_book())}>Buy Book</button>
    </>
   
  )
}

export default BookContainer