
const home = () => {
  return (
    <>
    <div>
      <div className='w-full py-12 ' style={{background:"#0B2F0C"}}>
            <p className='text-center font-bold text-2xl' style={{color:"#E6C120",fontFamily: 'Marko One'}}>About us</p>
        </div>
    </div>

    <div className='px-32 max-md:px-10 max-md:pb-12 mt-12 flex flex-col gap-10' style={{minHeight:"100vh"}}>

      <div className='flex flex-col gap-5'>
        <h3 className='text-xl font-bold text-green-800 underline'>ABOUT THE COMPANY</h3>
        <p className='text-lg'>
            Sifan Soap and Detergent Manufacturing Enterprise was established in 2007 by the Commercial Code of Ethiopia. It is partnership based enterprise with two highly qualified and dedicated shareholders
            The Enterprise is located in Oromia Region Shegar City, Sululta administration, Aba Geda Woreda..
        </p>
      </div>

      <div className='flex flex-col gap-5'>
        <h3 className='text-xl font-bold text-green-800 underline'>Vision</h3>
        <p className='text-lg'>
          To be a leader in Soaps, Detergents and Cosmotics industry as well as highly engaged on development and expansion of Fast Moving Consumer Goods (FMCG) in Ethiopia by 2030 E.C.  </p>
      </div>

      <div className='flex flex-col gap-5'>
        <h3 className='text-xl font-bold text-green-800 underline'>Mission</h3>
        <p className='text-lg'>
          To manufacture and supply quality products of Soaps, Detergents, Cosmotics ,Cleaning and hygiene products and other related Products that substitute import products and creating job opportunity for the society.  </p>
      </div>

    </div>
    
    </>
  )
}

export default home