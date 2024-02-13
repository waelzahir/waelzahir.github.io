import chopper from "../assets/chopper.webp"

const Info = () => {
    return (
<>
        <div className='flex  justify-center md:justify-start pt-16'>
        <img className="w-52 h-44 rounded-[4%]" src={chopper} alt="" />
      </div>
      <div className='w-44 flex  justify-start'>
        <h1 className='w-full  font-egoist text-2xl'>Ouail Zahir</h1>
      </div>
      <div className='w-44 flex  justify-start'>
        <h1 className='w-full  font-egoist text-xl '>Mamadou Banga</h1>
      </div>
</>
    )
}
export default Info