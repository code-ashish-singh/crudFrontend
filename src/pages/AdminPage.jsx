import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
const AdminPage = () => {
  const [userData , setUserData] = useState([])
  const [visible, setVisible] = useState(false);
  const [id,setId] = useState(null)
    const [formData,setFormData] = useState({
          name : "",
          stack : "",
          email : "",
          number : ""
        })
      const handleSubmit = (e)=>{
            e.preventDefault()
            getData()
           
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
    const getData = async ()=>{
        try {
            let res =  await axios.get('http://localhost:3000/get-data')
            res = res.data.Data
            setUserData(res)
          console.log(userData)
        } catch (error) {
          console.log(error)
        }
        }
        const deleteData = async (id)=>{
          console.log(id)
          Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then( async (result) => {
  if (result.isConfirmed){
    setTimeout( async ()=>{
        let res =  await axios.delete(`http://localhost:3000/deleteData/${id}`);
           console.log(res)
            getData();
    },500)
     Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
}
  
})
 
          
        }
        const setData = async (data) =>{
        
            setFormData({
              name : data.name,
               stack : data.stack,
              email : data.email,
              number : data.number,
              password : data.password

            })
            setId(data._id)
            getData()
        }

        const updateData = async ()=>{
          let idx = id
          console.log('id',id)
          console.log('formdata',formData)
            await axios.put(`http://localhost:3000/update-data/${idx}`,formData);
            setVisible(false)
            setId(null)
            getData()
        }

        useEffect(()=>{
          getData()
          
        },[])
  return (
    <>
      <div className='w-full min-h-screen bg-slate-900 flex flex-col justify-start py-10 items-center'>
            <div className='bg-white text-black w-[90%] py-2 font-semibold text-2xl text-center'>
                  <h2>User Data</h2>
            </div>
            <div className='w-[90%] mt-5'>
                  {/* <table  className='w-full bg-white text-xl rounded-md table-fixed '>
                       <thead className='w-full flex justify-between uppercase '>
                          <tr className='w-full flex justify-between text-lg
                                items-center   '>
                             <th className='p-5' >Sr No</th>
                          <th className='p-5' >Name</th>
                          <th className='p-5' >Email</th>
                          <th className='p-5' >Stack</th>
                          <th className='p-5' >Password</th>
                          <th className='p-5' >Action</th>
                          </tr>
                       </thead>
                       <tbody className='w-full'>
                           {
                              userData.length > 0 ? userData.map((data,idx)=>(
                                <tr key={idx} className='w-full flex justify-between text-lg
                                items-center  text-left  '>
                                <td className='px-5 py-2 text-left  ' >{idx+1}</td>
                                <td className='px-5 py-2 text-left capitalize font-semibold  ' >{data.name}</td>
                                <td className='px-5 py-2 text-left   ' >{data.email}</td>
                                <td className='px-5 py-2 text-left   ' >{data.stack}</td>
                                <td className='px-5 py-2 text-left   ' >{data.password}</td>
                                <td className='px-5 py-2 flex gap-2 text-white' >
                                  <button className='bg-red-700 px-3 py-1 rounded'>Delete</button>
                                  <button className='bg-green-800 px-3 py-1 rounded'>Edit</button>
                                  </td>

                            </tr> 
                              )) : <h3>No User Details </h3>
                           }
                       </tbody>
                  </table> */}
                  <table className='w-full bg-white text-xl rounded-md table-fixed border-collapse'>
  <thead>
    <tr className='text-lg items-center bg-gray-100 uppercase border-b'>
      <th className='p-5 text-left w-1/12'>Sr No</th>
      <th className='p-5 text-left w-2/12'>Name</th>
      <th className='p-5 text-left w-3/12'>Email</th>
      <th className='p-5 text-left w-2/12'>Stack</th>
      <th className='p-5 text-left w-2/12'>Password</th>
      <th className='p-5 text-left w-2/12'>Action</th>
    </tr>
  </thead>
  
  <tbody>
    {userData.length > 0 ? (
      userData.map((data, idx) => (
        <tr key={idx} className='text-lg items-center border-b hover:bg-gray-50'>
          <td className='px-5 py-3 text-left'>{idx + 1}</td>
          <td className='px-5 py-3 text-left capitalize font-semibold'>{data.name}</td>
          <td className='px-5 py-3 text-left break-all'>{data.email}</td>
          <td className='px-5 py-3 text-left'>{data.stack}</td>
          <td className='px-5 py-3 text-left truncate'>{data.password}</td>
          <td className='px-5 py-3 flex gap-2 text-white items-center'>
            <button
              onClick={()=>{
                deleteData(data._id)
              }}
             className='bg-red-700
             cursor-pointer
              px-3 py-1 rounded'>Delete</button>
            <button 
             onClick={()=>{
              setData(data)
              setVisible(true)
             }}
            className='bg-green-700
            cursor-pointer
            px-3 py-1 rounded'>Edit</button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" className="text-center py-10 font-semibold text-gray-500">
          No User Details
        </td>
      </tr>
    )}
  </tbody>
</table>
            <Dialog header="UpDate-Form" visible={visible} modal={false} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
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
          <div
           onClick={()=>{
              updateData()
             }}
           className='font-semibold text-xl cursor-pointer text-center 
           text-white bg-blue-700 py-2 rounded-md '>
             <button 
             onClick={()=>{
              updateData()
             }}
             type='submit'>Update</button>
          </div>
      </form>
           </Dialog>
            </div>
      </div>
    </>
  )
}

export default AdminPage