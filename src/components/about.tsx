import logo from "../assets/Group 3 (1).svg"

const about = () => {
  return (
    <div id='about' className='h-[100vh] max-md:h-fit '>
        <div className='w-full py-3 ' style={{background:"#0B2F0C"}}>
            <p className='text-center font-bold text-2xl' style={{color:"#E6C120",fontFamily: 'Marko One'}}>About us</p>
        </div>
        <div className='flex gap-3 px-32 max-lg:px-12 py-12 max-md:flex-col-reverse'>
            <div className='basis-1/2 flex flex-col gap-10 my-16 font-semibold' >
                <p>
                    Sifan Soap and Detergent Manufacturing 
                    Enterprise was established in 2007 by the 
                    Commercial Code of Ethiopia. It is partnership 
                    based enterprise with two highly qualified and 
                    dedicated shareholders. 
                </p>
                <p>
                    The Enterprise engaged in manufacturing 
                    of Fast Moving Consumer Goods (FMCG) 
                    processing industries such as Soaps, Detergents, 
                    Cosmotics, Cleaning and hygiene products, 
                    Packaging materials and other related Products.
                </p>
            </div>

            <div className='flex basis-1/2'>
                <img src={logo} width={"200px"} alt="" className='m-auto' />
            </div>
            
        </div>
    </div>
  )
}

export default about