import React from 'react'
import { redirect } from 'next/navigation';
import { use } from 'react';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';

async function user({params}:{params:any}) {

  const { id }:any= use(params);

  const cookieStore=await cookies()
  const token=String(cookieStore.get("token"))

  if(token=="QpwL5tke4Pnpja7X4"){
    redirect("/dashboard");
  }

<<<<<<< HEAD
=======
  if (token) {
  if (token != "QpwL5tke4Pnpja7X4")
      redirect("/login");
  }else {
    redirect("/login");
  }

>>>>>>> f54ad7991d2fcd1f6a4f51a5430abb45855e5c91
  async function getUserData(id: number) {
      const res = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'GET',
        headers: {
          'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      });
      const user = await res.json();
      if (!user.data) {
        notFound();
      }
      return user.data;
  }

  const userData = use(getUserData(id));

  return (
    <>
      <div className='containerFlexBothCenter flex-col bg-[#e5eef1]'>
        <div className='bg-gray-100 w-[70%] h-auto p-[10px] rounded-lg'>

          <img src={userData.avatar} alt="Avatar" className='w-full h-[150px] rounded-full object-contain' />
          <p className='text-center mt-[10px]'>
            {userData.first_name} {userData.last_name}
          </p>
          <p className='text-center mt-[10px]'>
            {userData.email}
          </p>   
        </div>
      </div>

      <div className='w-auto h-auto bg-green-500 p-[10px] fixed bottom-[50px] right-[50px] text-white rounded-lg'>
        <a href='/dashboard' className='direction-rtl'>dashboard بازگشت به</a>
      </div>
    </>
  )
}

export default user