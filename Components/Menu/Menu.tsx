'use client';

import React,{useState} from 'react'
import Link from 'next/link'
import { IoIosMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";

function Menu() {

    const [showMenu,setShowMenu]=useState<boolean>(false)

    return (
        <>
            {/* navbar in mobile screen */}
            <div dir='rtl' className='w-[100%] h-[50px] bg-[#98acac] text-white text-right fixed top-[0px] left-[0px] right-[0px] md:hidden' onClick={()=>setShowMenu(!showMenu)}>
              <IoIosMenu className='h-[100%] text-[42px]'/>
            </div>  
            
            {/* menu */}
            <div className={`w-[60%] h-[%100] bg-[#333356] text-right text-white fixed right-[0px] top-[0px] bottom-[0px] ${showMenu?"block":"hidden"} md:w-[20%] md:block`}>    

              <div className='mt-[10px] pr-[5px]'>

                <div dir='rtl' className={`mb-[10px] ${showMenu?"block":"hidden"} md:hidden`}>
                    <GrClose className='h-[30px] w-[30px] cursor-pointer' onClick={()=>setShowMenu(!showMenu)}/>
                </div>

                <Link href={"/"} >
                  بازگشت به صفحه اصلی
                </Link>

              </div>  
                
              <button className='mt-[10px] fixed bottom-[0px] right-[5px] bottom-[15px] text-right' onClick={()=>{localStorage.removeItem("token");window.location.href="/login"}}>
                خروج از سیستم
              </button>    
            </div>
        </>
    )
}

export default Menu