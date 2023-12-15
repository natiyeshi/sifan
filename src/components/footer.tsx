import s1 from "../assets/Vector (10).svg"
import s2 from "../assets/Vector (11).svg"
import s3 from "../assets/bi_facebook.svg"
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div id='footer' className='px-32 max-lg:px-10 text-white py-12 flex max-lg:gap-10  justify-around flex-wrap'  style={{background:"#0B2F0C"}}>
        <div className='max-md:w-full'>
            <h1 className='font-semibold text-lg'  style={{color : "#E6C120"}} >Information</h1>
            <ul className='my-4 flex flex-col gap-1'>
                <li className='hover:border-yellow-500 hover:text-yellow-500 duration-150 cursor-pointer  border-b border-transparent'><Link to="/">HOME</Link> </li>
                <li className='hover:border-yellow-500 hover:text-yellow-500 duration-150 cursor-pointer  border-b border-transparent'><Link to="/aboutus">ABOUT US</Link></li>
                <li className='hover:border-yellow-500 hover:text-yellow-500 duration-150 cursor-pointer  border-b border-transparent'><Link to="/products">OUR PRODUCTS</Link></li>
                <li className='hover:border-yellow-500 hover:text-yellow-500 duration-150 cursor-pointer  border-b border-transparent' onClick={() => location.href =  window.location.origin+"#testimonials"}>TESTIMONIALS</li>
            </ul>
        </div>

        <div className='max-md:w-full'>
            <h1 className='font-semibold text-lg'  style={{color : "#E6C120"}} >Information</h1>
            <ul className='my-4 flex flex-col gap-1'>
                <li className='flex'> <span className='w-[5px] h-[5px] my-auto bg-white p-1 mr-2 rounded-lg'></span> sifansoap2018@gmail.com</li>
                <li className='flex'> <span className='w-[5px] h-[5px] my-auto bg-white p-1 mr-2 rounded-lg'></span> 0973416363</li>
                <li className='flex'> <span className='w-[5px] h-[5px] my-auto bg-white p-1 mr-2 rounded-lg'></span> 0911096223</li>
                <li className='flex'> <span className='w-[5px] h-[5px] my-auto bg-white p-1 mr-2 rounded-lg'></span> 
                    Oromia Region Shegar City, Sululta <br />
                    administration, Aba Geda Woreda.
                </li>
            </ul>
        </div>

        <div className='max-md:w-full'>
            <h1 className='font-semibold text-lg'  style={{color : "#E6C120"}} >Follow Us</h1>
            <p className='my-4'>Follow us on our social medias</p>
            <ul className='my-1 flex  gap-5'>
                <li >
                    <img src={s1} alt="" />
                </li>
                <li >
                    <img src={s2} alt="" />
                </li>
                <li >
                    <img src={s3} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default footer