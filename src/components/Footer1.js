import React from "react";



const Footer1 = () => {
  return (
    <div  className=' sm:hidden flex items-center justify-between py-[3%] px-[4%] font-md  ' style={{backgroundColor:'#00A859', color:'white'}}>
        <div className="  flex flex-col md:place-items-end">
        <h2 className=" md:text-3xl text-4xl font-medium  md:w-[15%] mb-8">Contact us</h2>
       
       <hr/>
       <div className=" text-3xl flex  gap-[10%] w-[20%] max-sm:w-[40vh] my-2" >
          
          <p className="text-xl font-medium my-[2%]" >Phone Number <br></br> <br></br>+91 9890 852 663</p>
          <hr/>
            </div>      
            <div className=" text-3xl flex  gap-[10%] w-[20%] my-2">
           
            <p className="text-xl font-medium">Email <br></br> <br></br>sales@adonitech.co.in</p>
            <hr/>

            </div>
   

    
 
</div>
      
    </div>
  )
}

export default Footer1

