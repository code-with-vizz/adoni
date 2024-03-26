import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
    
    const Header = () => {
        const [showMenu, setShowMenu] = React.useState(false)
        const handleMenu = () => {
            setShowMenu(!showMenu)
        }
        
      return (
        <>
        
        <header  className={`flex gap-[30vh] mx-[0%] pl-[2.5%] items-center h-[10vh] w-[100%] font-medium shadow-md  `}>
            {
                showMenu ||
                <div>
                <img width={100} height={100}  src='../images/adoni.png' alt='logo'/>
            </div>
            }
            {
                showMenu && 
              
                    <div style={{backgroundColor:'white'}} className='fixed bottom-0 w-full h-full md:hidden'>
                    <RxCross2 style={{backgroundColor:'#00a859',color:'black', borderColor:'#00a859'}} onClick={handleMenu} className='mt-[6%] ml-[85%]  rounded-full text-4xl md:hidden'/>
                    <ul  className='flex flex-col text-4xl mt-[10%] ml-[10%]  ' style={{color:'#00a859'}}>
                        <li className='mt-[8%]'><a onClick={handleMenu}  href='#home'>Overview</a></li>
                        <li className='mt-[8%]'><a onClick={handleMenu} href='#about'>About</a></li>
                        <li className='mt-[8%]'><a onClick={handleMenu} href='#contact'>Features</a></li> 
                    </ul>
                    </div>
                   
              
            }
            <nav className='w-[50%] hidden md:block ml-[35%]'  >
                <ul className='flex gap-[20vh]  ' style={{color:'#00a859'}}>
                    <li className='hover:text-orange-400 '><a href='#home'>overview</a></li>
                    <li className='hover:text-orange-400 '><a href='#about'>About</a></li>
                    <li className='hover:text-orange-400 '><a href='#contact'>Features</a></li> 
                </ul>
            </nav>
            {
                showMenu ||
                <RxHamburgerMenu onClick={handleMenu} className='text-4xl md:hidden mr-[5%]' style={{color:'#00A859'}}/>
            }
           
    
        </header>
        </>
      )
    }
    
    export default Header