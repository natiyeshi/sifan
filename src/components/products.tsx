import img1 from "../assets/image 1.png"
import img2 from "../assets/image 2.png"
import img3 from "../assets/image 3.png"
import Product from './product'
const products = () => {
  return (
    <div className='  max-md:mb-5 max-md:h[90vh]' style={{minHeight:"100vh"}}>
        <div className='w-full py-3 ' style={{background:"#0B2F0C"}}>
            <p className='text-center font-bold text-2xl' style={{color:"#E6C120",fontFamily: 'Marko One'}}>Products</p>
        </div>
        <div className='my-3 mx-32 max-md:mx-6 mt-16 flex flex-wrap gap-12 justify-around'>
            <Product img={img1} text={"Manual dishes wash liquid detergent"} ind={0} />
            <Product img={img2} text={"Liquid laundry detergent "} ind={1}/>
            <Product img={img3} text={"Hand Wash"}  ind={2}/>
        </div>
    </div>

  )
}

export default products