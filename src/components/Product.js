import React from 'react'


const Product = () => {
  return (
    <div className='flex items-center justify-between mx-[10%] my-[10%] max-sm:grid max-sm:grid-rows max-sm:mx-[7%] max-md:grid max-md:grid-rows max-md:mx-[15%]'>
        <img src={'images/CraneBuffer.jpg'} alt='product' width={500} height={500}/>
        <div className='w-[40%] max-sm:w-[40vh] max-md:w-[100%]'>
            <h1 className='font-semibold text-3xl mb-[5vh] 'style={{color:'#00A859'}} >
                Crane buffer
            </h1>
            <div>
                <p className='border-b border-green-500 py-[2vh] font-md'>
                Leading product design in the world.
                All the key components use top brandproducts in the industry, more than 60%
                are originally from US.

                </p>
                <p className='border-b border-green-500 py-[2vh] font-md'>
                

                Originating from American design and technology, 
                AdoniTech specializes in research
                and development, manufacture, testing and solutions
                of energy absorption and vibration control products
                like hydraulic shock absorbers, viscous dampers, wire rope vibrations
                isolators, polyurethane cushions etc. AdoniTech and manufacture are based
                 in Wuxi, Jiangsu Province. Currently, AdoniTech has 4 complete product lines and the leading product testing lab in the industry.



                </p>
                <p className='py-[2vh] font-md'>
                Excellent working life and performance.
Prompt product delivery, enough safety inventories.
Quick and good technical supports such as product sizing, product testing, and solutions.
On-site service support from domestic professionals within 24 hours.

                </p>
            </div>
           
            
        </div>
      
    </div>
  )
}

export default Product
