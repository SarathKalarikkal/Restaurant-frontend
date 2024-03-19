import React  from 'react'
import {HiOutlineArrowRight} from "react-icons/hi"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Reservation() {

    const {register,handleSubmit,reset, formState: { errors },} = useForm()

    const navigate = useNavigate()

    const SubmitHandler = async (formData) => {
        
               
  
        try {
            
            // If user is not reserved, proceed with the reservation
            const { data } = await axios.post("https://restaurant-backend-vxs0.onrender.com", formData, {
                headers: {
                    "Content-Type": 'application/json'
                },
                withCredentials: true
            });

            console.log(data);
             if(data.success){
                toast.success(data.message);
                navigate('/success');
             }else{
                toast.error(data.message);
                navigate('/');
                reset()
             }
            
    
        } catch (error) {
    
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred while processing your request.");
            }
            console.log(error);
        }
    }
    
    

   

  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
                <img src="/reservation.png" alt="reservation" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>MAKE A RESERVATION</h1>
                    <p>For Further Question, Please Call</p>
                    <form  onSubmit={handleSubmit(SubmitHandler)}>
                        <div className='first'>
                            <div className='inp-group'>
                              <input type="text" placeholder='First Name' {...register("firstName", { required: true })}/>
                              {errors.firstName && <span>First name is required</span>}
                            </div>
                            <div className='inp-group'>
                              <input type="text" placeholder='Last Name'{...register("lastName")} />
                              {errors.lastName && <span>Last name is required</span>}
                            </div>
                        </div>
                        <div className='first'>
                            <div className='inp-group'>
                                 <input type="date" placeholder='Date' {...register("date", { required: true })}/>
                                 {errors.date && <span>Date is required</span>}
                            </div>   
                            <div className='inp-group'>
                               <input type="time" placeholder='Time' {...register("time", { required: true })}/>
                               {errors.time && <span>Time is required</span>}
                            </div>    
                        </div>
                        <div className='first'>
                          <div className='inp-group'>
                                <input type="email" placeholder='Email' {...register("email", { required: true })}/>
                                {errors.email && <span>Email is required</span>}
                           </div>    
                           <div className='inp-group'>
                                <input type="number" placeholder='Phone' {...register("phone", { required: true })}/>
                                {errors.phone && <span>Phone is required </span>}
                            </div>
                        </div>
                        <button type='submit' id='submitBtn'>RESERVE NOW <span><HiOutlineArrowRight/></span></button>

                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reservation
