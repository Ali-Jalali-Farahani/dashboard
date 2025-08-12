"use client"
import React from 'react'
import Input from '@/Components/LoginPage/Input'
import ContainerBox from '@/Components/LoginPage/ContainerBox'
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch} from 'react-redux';
import {setUserName,setPassword,setErrorMessage} from "@/store/slices/loginParams"
import {addTokenToCookies} from "./page"


function ClientComponent() {
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
        const response = await fetch("https://reqres.in/api/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
          },
          body: JSON.stringify({ email: userName, password:password }),
        });

        if (!response.ok) {
          dispatch(setErrorMessage("جیمیل یا رمز عبور اشتباه است"))
          return;
        }

        const data = await response.json();
        addTokenToCookies(data.token);
        router.push('/dashboard');

      } catch (error) {
        dispatch(setErrorMessage("خطا در ورود به سیستم"))
      }
    }
    return (
        <ContainerBox>
          <p className='text-center mb-[20px]'>ورود به حساب کاربری</p>
          <Input Name={"username"} value={userName} updateValue={setUserName}/>
          <Input Name={"password"} value={password} updateValue={setPassword}/>
          <p className={`text-center text-red-500 mb-[18px] ${errorMessage==""?"hidden":"block"}`}>{errorMessage}</p>
          <button type="submit" className='bg-green-600 text-white block mx-auto px-[18px] py-[10px] rounded-md cursor-pointer' onClick={handleLogin}>ورود</button>
        </ContainerBox>
    )
}

export default ClientComponent