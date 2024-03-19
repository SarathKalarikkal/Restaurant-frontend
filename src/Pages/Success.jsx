import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

function Success() {

const [countdown, setCountdown] = useState(5)
const navigate = useNavigate()

useEffect(()=>{
    
   const timeOutId = setInterval(()=>{
      setCountdown((preCount)=>{
        if(preCount === 1){
          clearInterval(timeOutId)
          navigate('/')
        }
        return preCount -1
      })
   },1000)
  return ()=>clearInterval(timeOutId)
},[navigate])

  return (
    <>
       <section className='notFound'>
           <div className="container">
             <img src="/sandwich.png" alt="success" />
             <h1>Redirecting to home in {countdown} seconds...</h1>
             <Link to={'/'}>Back to Home <span><HiOutlineArrowNarrowLeft /></span></Link>
           </div>
       </section>
    </>
  )
}

export default Success