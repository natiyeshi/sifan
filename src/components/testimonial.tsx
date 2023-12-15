
const testimonial = ({name,text}:any) => {
  return (
    <div className='border-2 shadow-lg shadow-slate-200 rounded-tr-[50px] text-white px-7 flex flex-col' style={{background:"#0B2F0C"}}>
        <h2 className='text-lg font-bold py-2 underline ' style={{color : "#E6C120"}}>{name}</h2>
        <div className='mt-2 py-2 mb-1 my-auto w-[250px] '>
            {text}
        </div>
    </div>
  )
}

export default testimonial