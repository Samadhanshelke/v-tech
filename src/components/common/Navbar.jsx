import { useState } from 'react'
import logo from '../../assets/vtech-logo.png'
import { Link } from 'react-router-dom'
import { FaSortDown } from "react-icons/fa";
function Navbar() {
const [open,setOpen] = useState(false)
const handleClose = ()=>{
    setOpen(false)
    console.log('clicked closed')
}
const handleOpen = ()=>{
    setOpen(true)
    console.log('clicked open')
}
  return (
    <div className="relative">
          {/* desktop nav */}
          <nav className="z-50 top-0 left-0 right-0 transition-all  duration-700 fixed bg-black bg-opacity-60 backdrop-blur-md" style={{transition: '0.4s'}}>
            <div className="container px-4 mx-auto flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <div className="text-2xl text-theme-default">
                        <img src={logo} className="w-20" alt=""/>
                    </div>

                    <div className="hidden lg:block ms-11 ">
                        <ul className="flex gap-9 text-xs text-white">
                            <li className="hover:border-theme-default hover:border-b border-b border-transparent"><Link to="/">Home</Link></li>
                            <li className="hover:border-theme-default relative hover:border-b border-b border-transparent cursor-pointer show ">
                                <span className='flex items-center justify-center '>Services <FaSortDown className="mb-1"/></span>
                                <ul className='absolute text-sm hidden w-52 top-5 right-[50%] left-[50%] translate-x-[-50%] bg-black h-20 rounded-md py-4 px-2  flex-col gap-y-3'>
                                        <li className='hover:text-green-500'><Link to='/design-and-engineering'>Design and Engineering</Link></li>
                                        <li className='hover:text-green-500'>Quality Assurance</li>
                                      
                                </ul> 
                            </li>
                            
                            <li className="hover:border-theme-default hover:border-b border-b border-transparent"><Link to="">Blogs</Link></li>
                            <li className="hover:border-theme-default hover:border-b border-b border-transparent"><Link to="">News</Link></li>
                            <li className="hover:border-theme-default hover:border-b border-b border-transparent"><Link to="/about">About us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-3 ">
                    <Link to={'/contact'}>
                        <div className="px-9 rounded-3xl py-2 bg-theme-default text-white hidden lg:block hover:bg-theme-dark">
                            Contact us
                        </div>
                    </Link>
                    <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 block lg:hidden cursor-pointer hover:text-theme-default text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                    </svg>

                
                </div>
            </div>
        </nav>

        {/* mobile nav */}
        <nav className={`z-[100] lg:z-0 w-4/5 lg:hidden  ${open===true ? "flex" :"hidden"} top-0 fixed right-0  flex-row-reverse  transition-all  duration-500 bg-black to-theme-light pt-8 px-6  opacity-100  translate-x-0 `}>
        

            <div className="flex justify-end text-white text-2xl" >
                 <div>
                    <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24 " strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>

            <ul className="space-y-10 w-full text-xl pt-8 font-bold h-screen z-40 text-theme-light ">
                <li><Link to="/">Homes</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="">Blogs</Link></li>
                <li><Link to="">News</Link></li>
                <li><Link to="/about">About us</Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar