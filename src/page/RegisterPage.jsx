import React from 'react'
import Register from '../componants/Register'
const RegisterPage = () => {
  return (
    <div className="flex bg-[url('./Images/home.png')] bg-cover bg-center  w-full">

      <div className="justify-center items-center h-screen space-x-2 w-1/2  sm:flex hidden  bg-black bg-opacity-50">
        <img src="/Images/logo.svg" alt='logo' />

      </div>

      <div className="flex items-center justify-center sm:w-1/2 h-screen  bg-black bg-opacity-50">

        <Register/>
      </div>

    </div>
  )
}

export default RegisterPage