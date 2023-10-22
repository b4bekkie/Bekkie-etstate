import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className=' p-3 max-w-lg mx-auto '>
      <h1 className='text-4xl text-center font-semibold my-6'>Sign Up</h1>

      <form className='flex flex-col gap-4' >
        <input className='border p-3 rounded-lg transform transition-transform duration-200 hover:scale-105 ' type="text" id='username' placeholder='username' />
        <input className='border p-3 rounded-lg transform transition-transform duration-200 hover:scale-105  ' type="email" id='email'  placeholder='email'/>
        <input className='border p-3 rounded-lg transform transition-transform duration-200 hover:scale-105 ' type="text"  id="whatsappno" placeholder='whatsappNo' />
        <input className='border p-3 rounded-lg transform transition-transform duration-200 hover:scale-105 ' type="password"  id='password ' placeholder='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105 '>Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='pl-1'>Already have an account ?</p>
        <Link to='/sign-in'>
        <span  className='text-blue-700'>Sign-in</span>
        </Link>
      </div>

    </div>
    
  )
}

export default SignUp