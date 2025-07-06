
import React,{useState} from 'react'
import Link from 'next/link'
import ItemBox from '@/Components/ItemBox/ItemBox'
import { IoIosMenu } from "react-icons/io";
import Menu from '@/Components/Menu/Menu';
import ShowItems from '@/Components/ShowItems';

async function dashboard() {
  const res =await fetch("https://reqres.in/api/users", {
      method: 'GET', // یا 'POST', 'PUT' و غیره
      headers: {
      'x-api-key': 'reqres-free-v1', // اضافه کردن هدر API Key
      'Content-Type': 'application/json', // (اختیاری) برای درخواست‌های JSON
      }
  },
  );
  
  const users=await res.json();
  const usersData = users.data;

  return (
    <div className='w-full h-full bg-[#e5eef1] flex'>

      {/* menu */}
      <Menu />

      {/* items */}
      <div className='w-full h-full grid-cols-2 grid grid-rows-[max-content] gap-[10px] p-[10px] mt-[50px] md:w-[80%] md:grid-cols-3 md:mt-[10px]'>
        
        {/* show items */}
        <ShowItems />

      </div>
      
    </div>
  )
}

export default dashboard