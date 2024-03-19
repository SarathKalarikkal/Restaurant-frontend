import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowLeft} from "react-icons/hi"

function NotFound() {
  return (
    <>
       <section className='notFound'>
          <div className="container">
            <img src="/notFound.svg" alt="notfound" />
            <h1>LOOKS LIKE YOU ARE LOST!</h1>
            <p>We can't find the page you're looking for</p>
            <Link to={'/'}>Back to Home <span><HiOutlineArrowNarrowLeft /></span></Link>
          </div>
       </section>
    </>
  )
}

export default NotFound
