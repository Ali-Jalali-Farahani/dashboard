"use client"
import React, {use, useState} from 'react'

import Input from '@/Components/LoginPage/Input'
import ContainerBox from '@/Components/LoginPage/ContainerBox'
import { useRouter } from 'next/navigation';
import addTokenToCookies from './addTokenToCookies';

function login() {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const router = useRouter();

   // Handle login function
    const handleLogin =async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (username === "" || password === "") {
            setError("لطفا نام کاربری و رمز عبور را وارد کنید")
            return;
        }

        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({username: 'emilys', password: 'emilyspass'}),
                body: JSON.stringify({username: username, password: password}),
                // credentials: 'include'
            });

            if (!response.ok) {
                setError("خطا در ورود به سیستم")
            }

            const data=await response.json();
            if (data.message!='Invalid credentials') {
                await addTokenToCookies(data.accessToken);
                router.push('/dashboard');
            } else {
                setError("خطا در ورود به سیستم")
            }
        } catch (error) {
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