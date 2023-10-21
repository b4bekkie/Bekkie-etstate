import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3  '>

    
       <Link to="/">
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Real <br></br></span>
          <span className='text-slate-700'> E-State</span>
          
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center transition-transform duration-300 transform scale-100 hover:scale-105 focus:scale-105 ' >
            <input type="text" name="" id="" placeholder='Search...'className='bg-transparent focus:outline-none w-24 sm:w-64 ' />
            <FaSearch className="text-slate-600"/>
          </form>
          <ul className='flex gap-4'>
           <Link to='/'> <li className='  hidden sm:inline hover:underline text-slate-700   '>Home</li> </Link>
           <Link to='/about'><li className='hover:scale-105 hidden sm:inline hover:underline text-slate-700'>About</li></Link> 
           <Link to='/sign-in' ><li className=' hover:underline text-slate-700 hover:scale-105 '>Sign In</li></Link>
           </ul>



      </div>
    </header>
  )
}
