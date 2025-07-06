import React from 'react'

function Input({Name}:{Name:string}){
  return (
    <div className='mb-[20px]'>
        <label htmlFor=''>
            <p>{Name}</p>
            <input type="text" className='bg-gray-100 border-[0.5px] w-full'/>
        </label>
    </div>
  )
}

export default Input