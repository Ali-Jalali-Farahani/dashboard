"use client"
import React from 'react'

const ContainerBox:React.FC<React.PropsWithChildren>=({children})=>{
  return (
    <div className='w-[40%] h-auto bg-white rounded-xl p-[20px] shadow-2xl'>
        {children}
    </div>
  )
}

export default ContainerBox