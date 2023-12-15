
const mainProduct = ({left,img,header,text,ava,ls}:any) => {
  return (
    <div className={` flex max-md:flex-col ${left && 'flex-row-reverse'} `}  style={{minHeight : "50vh"}} >
        <div className='basis-1/2 flex flex-col gap-4'>
            <h2 className='text-2xl font-extrabold my-2 ' style={{fontFamily: 'Marko One'}} >{header}</h2>
            <p className='font-semibod ps-5' style={{fontWeight:"400"}}>
                {text}
            </p>
            {ls && 
            <ul className='flex flex-col gap-1 ps-5'>
                {ls.map((data:any) => (
                    <li className='flex'> <span className='w-[3px] h-[3px] p-1 rounded-full bg-gray-500 my-auto mr-2'></span> {data}</li>
                ))}
            </ul>
            }
            <p className='font-bold'>
                Available in <br />
                {ava}
            </p>
        </div>
        <div className='flex basis-1/2 bgred-400'>
            <img src={img} width={""} className='mx-auto my-5 w-1/2 h-/3' alt="" />
        </div>
    </div>
  )
}

export default mainProduct