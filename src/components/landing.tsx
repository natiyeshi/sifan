import bg from "../assets/photo_2023-11-12_12-00-59 1.png"

const landing = () => {
  return (
    <div className='max-lg:h-[100vh] h-[90vh] relative '>
        <img className='object-cover group-hover:scale-110  duration-300 00 rounded-t w-full h-full cursor-pointer"' src={bg} alt="" />
        <div className='absolute left-0 right-0 top-0 bottom-0 opacity-70' style={{background:"#000000"}}></div>
        <div className='absolute top-0 z-10 text-white flex flex-col  mt-28 justify-center w-full'>
            <h1 className='text-[40px] max-lg:text-[25px] mx-auto px-4 ' style={{color:"#E6C120",fontFamily: 'Marko One'}}>
                Sifan Soap & Detergent <br />
                Manufacturing Enterprise
            </h1>
            <p className='mx-auto w-1/2 max-lg:w-5/6 text-center text-lg max-md:text-md mt-12'>
                Our products, which well known by brand called “YAYA’’, are manufactured 
                by fulfilling Compulsory Ethiopian Quality Standard and the products 
                quality are visible to our esteemed customer.
            </p>
            <button onClick={() => location.href = "#about"} className='px-10 font-bold text-black py-2 w-fit mx-auto mt-12 rounded-3xl' style={{background:"#E6C120"}}>
                More
            </button>
        </div>
    </div>
  )
}

export default landing