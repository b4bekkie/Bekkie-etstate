import React from 'react'
import { useSelector } from 'react-redux'


function Profile() {
  const {currentUser} = useSelector((state) =>state.user)
  return (
    <div className=' p-3 max-w-lg mx-auto '>
      <h1  className=' text-3xl font-semibold text-center my-7 '>profile</h1>
      <form  className='flex flex-col  gap-4'>
        <img className='rounded-full self-center w-24 h-24 mt-2 cursor-pointer' src={currentUser.avatar} alt="profile" />
        <input placeholder='username' type="text"  id="" className='rounded-lg p-3 border hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105' />
        <input placeholder='email' type="email"  id=""  className='rounded-lg p-3 border hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105'/>
        <input placeholder='WhatsappNo' type="text"  id="" className='rounded-lg p-3 border hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105'  />
        <input placeholder='password' type="password" id="" className='rounded-lg p-3 border hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105' />
        <button className=' bg-slate-700 text-white p-3 rounded-lg uppercase' >Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className=' text-red-700 cursor-pointer'>Delete  Account ?</span>
        <span className=' text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile