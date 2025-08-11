'use client';
import React,{useEffect} from 'react'
import Input from '@/Components/LoginPage/Input'
import ContainerBox from '@/Components/LoginPage/ContainerBox'
import { useRouter } from 'next/navigation';
// import { cookies } from 'next/headers';
import { useSelector,useDispatch} from 'react-redux';
import {setUserName,setPassword,setErrorMessage} from "@/store/slices/loginParams"

function login() {
  const {userName,password,errorMessage}=useSelector((state:{userName:string,password:string,errorMessage:string})=>state)
  const dispatch=useDispatch()
  console.log(userName,password,errorMessage)
  const router = useRouter();

  // Check if user is already logged in redirecting to dashboard
  useEffect(()=>{
    if(localStorage.getItem("token")=="QpwL5tke4Pnpja7X4"){
      router.push("/dashboard");
    }

  },[])


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
      cookieStore.set("token",data.token);
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