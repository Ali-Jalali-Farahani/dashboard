'use client'
import React,{useEffect,useState} from 'react'
import ItemBox from '@/Components/ItemBox/ItemBox'
import Menu from '@/Components/Menu/Menu';
import { redirect } from 'next/navigation';

function dashboard() {
  const [usersData, setUsersData] = useState<any[]>([]);

  useEffect(()=>{
    //check token(if not exist or token incorrect redirect to login)
    const token=localStorage.getItem("token");
    if(token){
      if(token!="QpwL5tke4Pnpja7X4")
        redirect("/login");
    }else{
      redirect("/login");
    }

    //fetch data of users
    const fetchData = async () => {
      const res = await fetch("https://reqres.in/api/users", {
        method: 'GET',
        headers: {
          'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json', 
        }
      });
      const users = await res.json();
      setUsersData(users.data);
    };

    fetchData()

  },[])

  return (
    <div className='w-full h-full bg-[#e5eef1] flex'>

      {/* menu */}
      <Menu />

      {/* items */}
      <div className='w-full h-full mt-[50px] md:mt-[10px]'>

        {/*search bar */}
        {/* <div className='w-full h-auto mt-[5px]'>
          <label>
            <input type="text" />
          </label>
        </div> */}

        {/* show items */}
        <div className='grid-cols-2 grid grid-rows-[max-content] gap-[10px] p-[10px]  md:w-[80%] md:grid-cols-3'>
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
      </div>
      
    </div>
  )
}

export default dashboard