import Testimonial from './testimonial'

const testimonials = () => {
    var testimonialsData = [
        {
          name: "Sarah L.",
          text: "I have been using Sifan Soap and Detergent products for my household needs, and I am extremely satisfied with their quality. The detergent is effective in removing tough stains, and the soap leaves my hands feeling clean and fresh. I highly recommend Sifan Soap and Detergent Manufacturing Enterprise for their excellent products."
        },
        {
          name: "John R., Hotel Manager",
          text: "I run a small hotel, and I have been using Sifan Soap and Detergent products for our laundry needs. Their detergent is powerful and leaves our linens and towels spotless and fresh-smelling. The soap provided by Sifan is gentle on the skin and has become a favorite among our guests. We are happy to have found a reliable partner in Sifan Soap and Detergent Manufacturing Enterprise."
        },
        {
          name: "Emily M.",
          text: "I have sensitive skin, and finding the right soap and detergent has always been a struggle. However, since I started using Sifan Soap and Detergent products, my skin irritation has reduced significantly. Their soap is mild and does not cause any dryness or redness. The detergent is tough on stains but gentle on my clothes. I am grateful to Sifan Soap and Detergent Manufacturing Enterprise for providing high-quality products suitable for my sensitive skin."
        }
      ];
      
  return (
    <div>
        <div id='testimonials' className='w-full py-3 ' style={{background:"#0B2F0C"}}>
            <p className='text-center font-bold text-2xl' style={{color:"#E6C120",fontFamily: 'Marko One'}}>Testimonials</p>
        </div>
        <div className='my-3 mx-32 mt-16 flex justify-around flex-wrap gap-5 mb-20'>
           {testimonialsData.map(data => {
            return <Testimonial text={data.text} name={data.name}/>
           })}
           
        </div>
    </div>
  )
}

export default testimonials