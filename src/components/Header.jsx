import React from 'react'

export default function Header() {
  return (
    <header className='text-slate-500 shadow-md'>
      <div className='flex justify-between'>

    

      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-400'>Real <br></br></span>
          <span className='text-slate-500'> E-State</span>
          
      </h1>
      <form >
            <input type="text" name="" id="" placeholder='Search...' />
          </form>
      </div>
    </header>
  )
}
