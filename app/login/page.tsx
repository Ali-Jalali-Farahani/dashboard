"use client"
import React from 'react'
import Input from '@/Components/LoginPage/Input'
import ContainerBox from '@/Components/LoginPage/ContainerBox'
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch} from 'react-redux';
import {setUserName,setPassword,setErrorMessage} from "@/store/slices/loginParams"
import useSWR from 'swr';
import fetcher from "./loginCheck.service"
import addTokenToCookies from './addTokenToCookies';

function login() {

  const {userName,password,errorMessage}=useSelector((state:{userName:string,password:string,errorMessage:string})=>state)
   const dispatch=useDispatch()
   const router = useRouter();
   // Handle login function
   const handleLogin = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     event.preventDefault();
     if (userName === "" || password === "") {
       dispatch(setErrorMessage("لطفا نام کاربری و رمز عبور را وارد کنید"))
       return;
     }
     try {
       const {data}=useSWR('https://dummyjson.com/auth/login',fetcher({username: userName, password:password}))
       addTokenToCookies(data.token);
       console.log(data)
       router.push('/dashboard');
     } catch (error) {
       dispatch(setErrorMessage("خطا در ورود به سیستم"))
     }
   }

  return (
    <div className='containerFlexBothCenter flex-col bg-[#9cdcf1]'>
      <ContainerBox>
        <p className='text-center mb-[20px]'>ورود به حساب کاربری</p>
        <Input Name={"username"} value={userName} updateValue={setUserName}/>
        <Input Name={"password"} value={password} updateValue={setPassword}/>
        <p className={`text-center text-red-500 mb-[18px] ${errorMessage==""?"hidden":"block"}`}>{errorMessage}</p>
        <button type="submit" className='bg-green-600 text-white block mx-auto px-[18px] py-[10px] rounded-md cursor-pointer' onClick={handleLogin}>ورود</button>
      </ContainerBox>
    </div>
  )
}

export default login