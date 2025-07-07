'use client'
import React,{useEffect,useState} from 'react'
import { redirect } from 'next/navigation';
import { use } from 'react';


function user({params}:{params:any}) {
  const [userData, setUserData] = useState<any>([]);
  const { id }:any = use(params);

  useEffect(() => {
    //check token(if not exist or token incorrect redirect to login)
    const token = localStorage.getItem("token");
    if (token) {
      if (token != "QpwL5tke4Pnpja7X4")
        redirect("/login");
    }else {
      redirect("/login");
    }

    const fetchData = async () => {
      const res = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'GET',
        headers: {
          'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json',
        }
      });
      const user = await res.json();
      setUserData(user.data);
    };

    fetchData();
  }, []);

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