import React from 'react'


const Hero = () => {
  return (
    <div >
        <div className='py-10 mx-[10%] mt-[80px] flex items-center justify-between max-sm:grid max-sm:grid-rows max-sm:mx-[7%] max-sm:my-[2%] max-md:grid max-md:grid-rows max-md:mx-[15%] max-md:overflow-hidden' >
          <div className='pb-[70px] max-sm:pb-10 max-sm:mt-[0px]  max-sm:pb-0 '>
             <h1 className='text-7xl font-bold text-black max-sm:text-6xl'>
               Efficient 
             </h1>
             <p className=' text-primary text-7xl my-[3%] font-bold  max-sm:text-6xl' style={{color:'#00A859'}}>Energy</p>
             <p className='text-black text-7xl my-[3%] font-bold max-sm:text-6xl'>Absorption & </p> 
             <p className='text-black text-7xl my-[3%] font-bold max-sm:text-6xl'>Vibration</p> 
             <p className='text-black text-7xl my-[3%] font-bold max-sm:text-6xl'>Control </p> 
     
             

            
          </div> 
          <img  src={'images/home.png'} alt='home' width={450} height={450} className='rounded-md'/> 
        </div>
      
    </div>
  )
}

export default Hero
