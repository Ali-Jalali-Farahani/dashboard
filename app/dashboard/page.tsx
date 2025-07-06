import React from 'react'
import Link from 'next/link'
import ItemBox from '@/Components/ItemBox/ItemBox'

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
      {/* items */}
      <div className='w-[80%] h-full grid grid-cols-3 grid-rows-[max-content] gap-[10px] p-[10px]'>
        
        {/* show items */}
        {usersData.map((user:any) => (
          <ItemBox 
            key={user.id}
            id={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
          />
        ))}

      </div>

      {/* menu */}
      <div className='w-[20%] h-[%100] bg-blue-500 text-right text-white fixed right-[0px] top-[0px] bottom-[0px]'>

        <div className='mt-[10px] pr-[5px]'>
          <Link href={"/"} >
            بازگشت به صفحه اصلی
          </Link>
        </div>

        <div className='mt-[10px] fixed bottom-[0px] right-[5px] bottom-[15px] text-right'>
          <Link href={"/login"} >
            خروج از سیستم
          </Link>
        </div>

      </div>
      
    </div>
  )
}

export default dashboard