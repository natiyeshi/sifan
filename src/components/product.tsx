
const product = ({img,text,ind}:any) => {
  return (
    <div className='border-2 relative rounded-tr-[50px]  border-green-800 px-7 flex flex-col'>
        <div className='absolute -left-4 -top-4 flex bg-green-800 p- rounded-full w-[35px] h-[35px]'> 
            <p className='m-auto text-white font-bold text-lg'>{ind + 1}</p>
        </div>
        <img src={img} width={"200px"} className='mx-auto ' alt="" />
        <div className='font-semibold mt-2 mb-1 my-auto w-[200px] text-center'>
            {text}
        </div>
    </div>
  )
}

export default product