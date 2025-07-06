import React from 'react'

function Loading() {
  return (
    <div className='containerFlexBothCenter flex-col bg-[#e5eef1] '>
        <div className='w-[50px] h-[50px] rounded-full border-4 border-blue-500 border-t-transparent animate-spin' />
        Loading...
    </div>
  )
}

export default Loading