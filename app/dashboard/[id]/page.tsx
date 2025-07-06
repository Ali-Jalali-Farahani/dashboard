import React from 'react'

async function user({params}:{params:any}) {

   const res =await fetch(`https://reqres.in/api/users/${params.id}`, {
      method: 'GET', // یا 'POST', 'PUT' و غیره
      headers: {
      'x-api-key': 'reqres-free-v1', // اضافه کردن هدر API Key
      'Content-Type': 'application/json', // (اختیاری) برای درخواست‌های JSON
      }
  },
  );

  const user=await res.json();
  const userData = user.data;
  console.log(userData)
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