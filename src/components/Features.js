import React from 'react'


const Features = () => {
  return (
    <div>
         <div className='flex items-center gap-[20vh] mx-[10%] my-[20%] max-sm:grid max-sm:grid-rows max-sm:mx-[7%] max-sm:gap-[3vh] max-md:grid max-md:grid-rows max-md:mx-[15%] max-md:gap-[3vh]'>
            <div className='w-[50%] max-sm:w-[40vh] max-md:w-[100%]'>
                <h1 className='text-6xl font-bold pb-[16%] max-sm:pb-[5%]' style={{color:'#00A859'}}>
                    Feature
                </h1>
                <div>
                <p className=' text-2xl my-[5%] max-sm:text-xl'>
                compact design, decelerates smoothly and safely 
                great energy absorption capacity loads up to 4 million in-ibs9500KNm
                per cycle with standard stroke lengths.
                </p>
                <p className=' text-2xl my-[5%] max-sm:text-xl'>
                Nitrogen-charged return system allows for soft 
                deceleration and positive return in a maintenance-free package.
                </p>
                <p className=' text-2xl my-[5%] max-sm:text-xl'>
                wide variety of optional configurations including protective bellows and safety cables. Available in custom-orificed non adjustable models.
                </p>
                <p className=' text-2xl my-[5%] max-sm:text-xl max-sm:mt-[5%] max-sm:my-[0%]'>
                 Incorporating optional fluids and seal packages 
                 available to expand standard operating temperature range.
                </p>


                </div>
               
            </div>
           
            <img  src={"images/feature.jpg"} alt='feature' width={500} height={500} className='mt-[7%] max-sm:mt-[0%] '/>
        </div>
      
    </div>
  )
}

export default Features
