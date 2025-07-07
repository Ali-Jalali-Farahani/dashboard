'use client';
import React,{useState,useEffect} from 'react'
import Input from '@/Components/LoginPage/Input'
import ContainerBox from '@/Components/LoginPage/ContainerBox'
import { AuthContext } from '@/Context/AuthContext';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

function login() {
  const router = useRouter();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if user is already logged in redirecting to dashboard
  useEffect(() => {
    if(localStorage.getItem("token")=="QpwL5tke4Pnpja7X4"){
      redirect("/dashboard");
    }
  },[])

  // Handle login function
  const handleLogin = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setError("لطفا نام کاربری و رمز عبور را وارد کنید");
      return;
    }
    
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (!response.ok) {
        setError("جیمیل یا رمز عبور اشتباه است");
        return;
      }

      const data = await response.json();
      localStorage.setItem("token",data.token);
      router.push('/dashboard');

    } catch (error) {
      setError("خطا در ورود به سیستم");
    }
  }

  return (
    <div className='containerFlexBothCenter flex-col bg-[#9cdcf1]'>
      <ContainerBox>
        <AuthContext.Provider value={{username, password, setUsername, setPassword}}>
          <p className='text-center mb-[20px]'>ورود به حساب کاربری</p>
          <Input Name={"username"} value={username} updateValue={setUsername}/>
          <Input Name={"password"} value={password} updateValue={setPassword}/>
        </AuthContext.Provider>
        <p className={`text-center text-red-500 mb-[18px] ${error==""?"hidden":"block"}`}>{error}</p>
        <button type="submit" className='bg-green-600 text-white block mx-auto px-[18px] py-[10px] rounded-md cursor-pointer' onClick={handleLogin}>ورود</button>
      </ContainerBox>
    </div>
  )
}

export default login