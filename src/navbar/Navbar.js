import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar container'>
       
       <ul className='flex navbar-content'> 
          <div className='navbar-left'> <li >Quiz App</li></div> 
          <div className='navbar-right flex'> <li>Login</li>
           <li>Sign Up</li>
           </div>
       </ul>
       
    </div>
  )
}

export default Navbar
