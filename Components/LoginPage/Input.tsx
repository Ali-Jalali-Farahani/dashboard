"use client"
import React from 'react'
import {useDispatch} from 'react-redux'

function Input({Name,value,updateValue}:{Name:string,value:string,updateValue:any}) {
  const dispatch=useDispatch()
  return (
    <div className='mb-[20px]'>
        <label htmlFor=''>
            <p>{Name}</p>
            <input type="text" className='bg-gray-100 border-[0.5px] w-full' value={value} onChange={(event)=>{dispatch(updateValue(event.target.value))}}/>
        </label>
    </div>
  )
}

export default Input