import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
      <nav>
         <h2>UserData</h2> 
         <ul>
            <li><Link to='/mainpage'></Link>  MainPage</li>
            <li>ShowPage</li>
         </ul>
      </nav>
   </>
  )
}

export default NavBar