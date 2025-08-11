import React from 'react'
import LoginClientComponent from "./ClientComponent"
// import { cookies } from 'next/headers';

function login() {
  return (
    <div className='containerFlexBothCenter flex-col bg-[#9cdcf1]'>
      <LoginClientComponent/>
    </div>
  )
}

export default login