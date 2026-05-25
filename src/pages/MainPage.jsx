import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'
const MainPage = () => {
 const navigate = useNavigate()
  return (
   <>

    <div className='h-screen w-full bg-slate-900 flex justify-center items-center gap-4 '>
       <div className='p-5 border-1 border-white rounded-md '>
            <div className='bg-[#EAE8E4] size-50 rounded-full'>
          <img className='rounded-full' src="Images/admin.png" alt="" />
             </div>
             <div 
              onClick={()=>{
                navigate('/userpage')
              }}
             className='w-full text-center bg-[#EAE8E4] mt-3 
             font-semibold text-2xl rounded  cursor-pointer py-2 
             hover:bg-blue-500 hover:text-white
             ' >
                <h2>User</h2>
             </div>
       </div>
      <div className='p-5 border-1 border-white rounded-md '>
           <div className='bg-[#EAE8E4] size-50 rounded-full flex justify-center items-center '>
          <img className='rounded-full' src="Images/user.png" alt="" />
           </div>
           <div 
            onClick={()=>{
              navigate('/adminpage')
            }}
           className='w-full text-center bg-[#EAE8E4] mt-3 
           font-semibold text-2xl rounded cursor-pointer py-2
            hover:bg-blue-500 hover:text-white
           '>
            <h2>Admin</h2>
           </div>
      </div>
    </div>
   
   </>
  )
}

export default MainPage