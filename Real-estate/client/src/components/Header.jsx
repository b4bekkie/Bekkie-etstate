import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'





export default function Header() {

  const {currentUser} = useSelector((state)=>state.user)
  console.log(currentUser)
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3  '>

    
       <Link to="/">
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap hover:opacity-90 disabled:opacity-80 transform transition-transform duration-200 hover:scale-105'>
        <span className='text-slate-500'>Sheringal<br></br></span>
          <span className='text-slate-700'> EState</span>
          
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center transition-transform duration-300 transform scale-100 hover:scale-105 focus:scale-105 ' >
            <input type="text" name="" id="" placeholder='Search...'className='bg-transparent focus:outline-none w-24 sm:w-64 ' />
            <FaSearch className="text-slate-600"/>
          </form>
          <ul className='flex gap-4'>
           <Link to='/'> <li className='  hidden sm:inline hover:underline text-slate-700   '>Home</li> </Link>
           <Link to='/about'><li className='hover:scale-105 hidden sm:inline hover:underline text-slate-700'>About</li></Link> 
           <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover ' src={currentUser.avatar} alt='profile' />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
           </ul>



      </div>
    </header>
  )
}
