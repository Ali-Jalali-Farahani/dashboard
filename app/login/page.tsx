"use client"
import React, {use, useState} from 'react'

import Input from '@/Components/LoginPage/Input'
import ContainerBox from '@/Components/LoginPage/ContainerBox'
import { useRouter } from 'next/navigation';
import fetcher from "./loginCheck.service"
import addTokenToCookies from './addTokenToCookies';
import  {User} from "./loginCheck.service"

function login() {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const router = useRouter();

   // Handle login function
    const handleLogin =(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (username === "" || password === "") {
            setError("لطفا نام کاربری و رمز عبور را وارد کنید")
            return;
        }

        const data: User | null = use(fetcher('https://dummyjson.com/auth/login', {username: username, password: password}))
        if (data) {
            addTokenToCookies(data.accessToken);
            router.push('/dashboard');
        } else {
            setError("خطا در ورود به سیستم")
        }
    }

    return (
      <div className='containerFlexBothCenter flex-col bg-[#9cdcf1]'>
        <ContainerBox>
          <p className='text-center mb-[20px]'>ورود به حساب کاربری</p>
          <Input Name={"username"} value={username} updateValue={setUsername}/>
          <Input Name={"password"} value={password} updateValue={setPassword}/>
          <p className={`text-center text-red-500 mb-[18px] ${error==""?"hidden":"block"}`}>{error}</p>
          <button type="submit" className='bg-green-600 text-white block mx-auto px-[18px] py-[10px] rounded-md cursor-pointer' onClick={handleLogin}>ورود</button>
        </ContainerBox>
      </div>
    )
}

export default login;