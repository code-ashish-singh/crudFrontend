import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios, { Axios } from 'axios'
const UserPage = () => {
        
         const [formData,setFormData] = useState({
        name : "",
        stack : "",
        email : "",
        number : ""
      })
      const navigate = useNavigate()
    
      const sendData = async () =>{
          await axios.post('http://localhost:3000/send-data',formData)
      }
      const handleSubmit = (e)=>{
          e.preventDefault()
          if(!(formData.name && formData.stack && formData.email && formData.number)) return toast('please fill all the fields')
          sendData()
          toast("Data Submitted")
          setFormData({
            name : "",
            stack : "",
            email : "",
            number : "",
            password : ""
          })
          console.log(formData)
      }
      const handleChange = (e)=>{
        const {name,value} = e.target 
        setFormData({
          ...formData,
          [name] : value
      })
      }
  return (
    <>
        <div className='h-screen w-full flex justify-center items-center bg-slate-900 relative'>
            <div 
            onClick={()=>{
                navigate('/')
            }}
            className='absolute top-6 left-10
             bg-blue-700  text-white font-semibold text-2xl py-1 px-3 rounded-md
             cursor-pointer
             '>
                    Home
            </div>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-md flex flex-col gap-8 '>
          <div>
             <label className='font-semibold text-xl' >Name : </label>
             <input
             className='font-semibold text-xl'
              type="text" 
              value={formData.name}
               placeholder='Enter Your Name' 
                onChange={handleChange} 
                name='name' 
                  />
          </div>
          <div>
            <label className='font-semibold text-xl' >  Stack : </label>
            <input 
            className='font-semibold text-xl'
            type="text" 
            value={formData.stack}
             placeholder='Enter Your Stack' 
              onChange={handleChange} 
              name='stack'   />
          </div>
           <div>
             <label className='font-semibold text-xl' >Email : </label>
             <input 
             className='font-semibold text-xl'
             type="email" 
             value={formData.email} 
             placeholder='Enter Your Email '  
              onChange={handleChange} 
              name='email'  />
          </div>
          <div>
            <label className='font-semibold text-xl' > Number : </label>
            <input 
            className='font-semibold text-xl'
            type="number" 
            value={formData.number} 
            placeholder='Enter Your Number'  
            onChange={handleChange} 
            name='number'   />
          </div>
          <div>
            <label className='font-semibold text-xl' > Password : </label>
            <input 
            className='font-semibold text-xl'
            type="password" 
            value={formData.password} 
            placeholder='Enter Your Password'  
            onChange={handleChange} 
            name='password'   />
          </div>
          <div className='font-semibold text-xl cursor-pointer text-center text-white bg-blue-700 py-2 rounded-md '>
             <button 
             className='w-full cursor-pointer'
             type='submit'>Submit</button>
          </div>
      </form>
      <ToastContainer />
        </div>
    </>
  )
}

export default UserPage