'use client'
import React,{useEffect,useState} from 'react'
import ItemBox from '@/Components/ItemBox/ItemBox'
import Menu from '@/Components/Menu/Menu';
import { redirect } from 'next/navigation';

function dashboard() {
  const [usersData, setUsersData] = useState<any[]>([]);
  const [fetchError,setFetchError]=useState<boolean>(false)
  const [searchText,setSearchText]=useState<string>("")

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
      try{
      const res = await fetch("https://reqres.in/api/users", {
        method: 'GET',
        headers: {
          'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json', 
        }
      });

      const users = await res.json();
      setUsersData(users.data);
      }catch(error){
        setFetchError(true)
        throw new Error("Failed to fetch users data");
      }
    };

    fetchData()

  },[])

  return (
    <div className='w-full h-full bg-[#e5eef1] flex'>

      {/* menu */}
      <Menu />

      {/* items */}
      <div className='w-full h-full mt-[50px] md:mt-[10px]'>

        {/* show items */}
        {!fetchError?(
          <>
            {/*search bar */}
            <div className='w-full h-auto mt-[5px] bg-[#f0ffff] p-[10px]'>
              <label className='flex'>
                <p className='mr-[12px]'>search:</p>
                <input value={searchText} onChange={(event)=>setSearchText(event.target.value)} type="text" className='bg-[#e3fafa] border-[3px]'/>
              </label>
            </div>
            <div className='grid-cols-2 grid grid-rows-[max-content] gap-[10px] p-[10px] pt-0  md:w-[80%] md:grid-cols-3'>

              {/* filter items and show(map) */}
              {usersData.filter((user:any)=>{
                let name=`${user.first_name} ${user.last_name}`;
                if(searchText){
                  return name.includes(searchText)
                }else{
                  return true
                }
              }).map((user:any) =>(
                <ItemBox 
                  key={user.id}
                  id={user.id}
                  firstName={user.first_name}
                  lastName={user.last_name}
                  avatar={user.avatar}
                />
              ))}

            </div>
            </>
        ):(
          // if data not fetch
          <div className='containerFlexBothCenter'>
            <h1 className='text-red-800 text-[25px]'>Error in get data from server</h1>
          </div>
        )}

      </div>
      
    </div>
  )
}

export default dashboard