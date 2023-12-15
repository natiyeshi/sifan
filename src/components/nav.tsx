import {useState} from 'react'
import img from "../assets/Group 3 (1).svg"
import { FiAlignJustify as MenuIcon } from "react-icons/fi";
import { Link } from 'react-router-dom';

const nav = () => {
  const [toggle,setToggle] = useState(true)
  return (
    <nav id='nav' className='w-ful  py-2 px-32 max-md:px-5 flex '>
        <div onClick={() =>  location.href =  window.location.origin+"#nav"} className='flex cursor-pointer gap-8 basis-1/3  max-lg:basis-5/6'>
            <img src={img} width={"50px"} alt="" />
            <h1 className='uppercase my-auto text-xl max-md:text-lg font-extrabold' style={{fontFamily: 'Marko One'}}> Sifan Soap </h1>
        </div>
        <div className='m-auto text-xs max-lg:hidden'>
            <ul className='uppercase flex gap-12 font-semibold'>
                <li className='hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'><Link to={"/"} > home </Link></li>
                <li className='hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'><Link to={"/aboutus"}> about us </Link></li>
                <li className='hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'><Link to={"/products"}> OUR PRODUCTS </Link></li>
                <li className='hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'onClick={() => location.href = "#footer"}>contact us</li>
            </ul>
        </div>
        <div className='m-auto lg:hidden relative'>
          <button title='click' onClick={() => setToggle(!toggle)}>
            <MenuIcon className="text-2xl" />
          </button> 
          <ul className={`${toggle ? "hidden" : "flex"} z-20 text-sm shadow-xl absolute right-0 p-2 bg-white border rounded-xl uppercase  flex-col gap-4 font-semibold`}>
                <li className='px-4 hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'><Link to={"/"} onClick={() => setToggle(true)}> home </Link></li>
                <li className='px-4 hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'><Link to={"/aboutus"} onClick={() => setToggle(true)}> about us </Link></li>
                <li className='px-4 hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'><Link to={"/products"} onClick={() => setToggle(true)}> OUR PRODUCTS </Link></li>
                <li className='px-4 hover:border-green-800 border-b cursor-pointer duration-150 hover:text-green-800 border-transparent'onClick={() => location.href = "#footer"}>contact us</li>
          </ul>
        </div>
    </nav>
  )
}

export default nav