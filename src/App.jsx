import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'   
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'
const App = () => {
         const [update,setUpdate] = useState(false)
  return (
    
    <>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/userpage' element ={<UserPage/>} />
          <Route path='/adminpage' element ={<AdminPage/>} />
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App