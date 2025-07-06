import React from 'react'
import Input from '@/Components/LoginPage/Input'
import ContainerBox from '@/Components/LoginPage/ContainerBox'
import SubmitButtom from '@/Components/LoginPage/SubmitButtom'

function login() {
  return (
    <div className='containerFlexBothCenter flex-col bg-[#9cdcf1]'>
      <ContainerBox>
        <p className='text-center mb-[20px]'>ورود به حساب کاربری</p>
        <Input Name={"username"}/>
        <Input Name={"password"}/>
        <SubmitButtom/>
      </ContainerBox>
    </div>
  )
}

export default login