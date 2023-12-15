import MainProduct from '../components/mainProduct'

import img1 from  "../assets/image 1.png"

import img5 from  "../assets/IMG_4953.png"
import img2 from  "../assets/image 2.png"
import img3 from  "../assets/image 3.png"
import img4 from  "../assets/image 4.png"

import img6 from  "../assets/IMG_4945.png"
import img7 from  "../assets/image 5 (1).png"


const products = () => {

  const datas = [
    {
      img : img2,
      header : "Liquid laundry detergent",
      text : "it is popular detergent for manual clothes washing, Machine washing and general cleaning plus widely accepted by consumers for its high performance of detergency, foaming, pleasant odor and whitening property",
      ava : "1L, 2L, 5L, 10L, 25L, 50L and 200L",
      ls : []
    },
    {
      img : img5,
      header : "Manual dishes wash liquid detergent",
      text : "is superior efficiency on removing of fatty and oily soil from dishes.",
      ava : "800ml, 5L, 25L, 50L and 200L",
      ls : []
    },
    {
      img : img6,
      header : "Hand Wash",
      text : "it is mild and effective hand cleaning liquid soap.",
      ava : "500ml, 5L, 25L, 50L and 200L ",
      ls : []
    },
    {
      img : img1,
      header : "Glass Cleaner",
      text : "It cleans window glass, mirror, Car glasses, Computer screen, TV and others without leaving streak.",
      ava : "500ml, 650L and 750 m",
      ls : []
    },
    {
      img : img3,
      header : "Berekina",
      text : "Toilet & floor cleaner with bleaching and disinfectant property.",
      ava : "5 and 10 % of Active chlorine of 300ml, 800ml, 5L and 30L",
      ls : [
        "It’s Cleans, whiten & disinfects",
        "Removes undesirable smell and stains from fabric"
      ]
    },
    {
      img : img4,
      header : "YAYA Laundry bar Soap",
      text : "it’s used for hand wash of clothes.",
      ava : "170gram, 180gram, 200gram and 250gram ",
      ls : [
        "Foamy and Durable.",
        "Shinny clothes after washing",
        "Long lasting smell and foam",
        "Very rich with the cleaning matter",
        "Have pleasant smell",
      ]
    },
    {
      img : img7,
      header : "YAYA Toilet/Bath Soap",
      text : "it’s used for hand, face and body washes.",
      ava : "25gram, 75gram and 150gram",
      ls : [
        "Have Pleasant smell.",
        "Have different attractive colors",
        "Very rich with natural cleaning matter and fruity extracts.",
        "Extra moisturizer",
        "Soft and smooth skin",
      ]
    },
    
  ]

  return (

    <div className='mb-32'>
        <div className='w-full py-3 ' style={{background:"#0B2F0C"}}>
            <p className='text-center font-bold text-2xl' style={{color:"#E6C120",fontFamily: 'Marko One'}}>Products</p>
        </div>
        <div className='flex flex-col gap-20 max-lg:px-12 max-md:px-5 px-32 mt-12'>
          {datas.map((data,ind) => (
            <MainProduct img={data.img} ls={data.ls} left={ind % 2 == 1} ava={data.ava} text={data.text} header={(ind + 1).toString() + ". " + data.header} />
          ))}
        </div>
    </div>
  )
}

export default products