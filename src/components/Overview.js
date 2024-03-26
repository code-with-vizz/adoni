import React from 'react'


const Overview = () => {
  return (
    <div>
        <div className='flex items-center justify-between mx-[10%] my-[10%] max-sm:grid max-sm:grid-rows max-sm:mx-[7%] max-md:grid max-md:grid-rows max-md:mx-[15%]'>
            <div className='w-[50%] mt-[8%] max-sm:w-[40vh] max-sm:mb-[5%] max-md:w-[100%]'>
                <h1 className='text-6xl font-bold pb-[6%] ' style={{color:'#00A859'}}>
                    Overview
                </h1>
                <p className=' text-2xl max-sm:text-xl'>
                Originating from American design and technology,
                AdoniTech specializes in research and development, 
                manufacture, testing and solutions of energy absorption
                and vibration control products like hydraulic shock absorbers,
                viscous dampers, wire rope vibration isolators, polyurethane 
                cushions etc. AdoniTech and manufacture are based in Wuxi,
                Jiangsu Province. Currently, AdoniTech has 4 complete product
                lines and the leading product testing lab in the industry.





            </p>
            </div>
           
            <img  src={"images/hero.png"} alt='overview' width={500} height={500} className='mt-[3%] max-sm:mr-[5%]'/>
        </div>
      
    </div>
  )
}

export default Overview
