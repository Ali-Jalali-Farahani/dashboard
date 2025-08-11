import React from 'react'
import { redirect } from 'next/navigation';
import { use } from 'react';
import { notFound } from 'next/navigation';


function user({params}:{params:any}) {

  const { id }:any= use(params);
  // const token = localStorage.getItem("token");
  // if (token) {
  //   if (token != "QpwL5tke4Pnpja7X4")
  //     redirect("/login");
  // }else {
  //   redirect("/login");
  // }



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